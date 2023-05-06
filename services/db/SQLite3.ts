import Database from 'better-sqlite3';
import type { DatabaseManager } from '../db';
import tableSpec from './SQLite3_TableSpec.json';

/**
 * Database manager implementation using SQLite3
*/
class SQLite3Manager implements DatabaseManager {
  /** Internal database access instance */
  private db;

  constructor(path = ':memory:', verbose = false) {
    // Initialize sqlite3 database
    this.db = new Database(
      path,
      { verbose: verbose ? msg => console.log('[SQLite3] ' + msg) : undefined }
    );
    this.db.pragma('journal_mode = WAL');

    // Create tables from spec
    tableSpec.forEach(({ table, fields }) => {
      this.db
        .prepare(`CREATE TABLE IF NOT EXISTS ${table} (${
          Object.entries(fields)
            .map(([ name, type ]) => `${name} ${type}`)
            .join(', ')
        })`)
        .run();
    });

    // Register cleanup handler
    process.on('exit', () => this.cleanup());
  }

  get(table: string, id?: number | bigint) {
    if (!id) {
      return this.db
        .prepare(`SELECT * FROM ${table}`)
        .all();
    } else {
      return this.db
        .prepare(`SELECT * FROM ${table} WHERE rowid = ?`)
        .get(id);
    }
  }
  
  create(table: string, values: { [key: string ]: any }) {
    return this.db
      .prepare(`INSERT INTO ${table} (${
        Object.keys(values)
          .join(', ')
      }) VALUES (${
        Object.values(values)
          .map(() => '?')
          .join(', ')
      })`)
      .run(...Object.values(values))
      .lastInsertRowid;
  }

  update(table: string, id: number | bigint, values: { [key: string ]: any }) {
    return this.db
      .prepare(`UPDATE ${table} SET ${
        Object.keys(values)
          .map(key => `${key} = ?`)
          .join(', ')
      } WHERE rowid = ?`)
      .run(...Object.values(values), id)
      .changes > 0;
  }

  remove(table: string, id: number | bigint) {
    return this.db
      .prepare(`DELETE FROM ${table} WHERE rowid = ?`)
      .run(id)
      .changes > 0;
  }

  // Auto-called when server stops
  private cleanup() {
    this.db.close();
  }

};

export default SQLite3Manager;
