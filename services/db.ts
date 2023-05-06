import SQLite3 from "./db/SQLite3";

export interface DatabaseManager {
  /**
   * Get an entry by ID (or all entries if no ID is provided)
   * @returns The requested entry/entries
   */
  get: (table: string, id?: number | bigint) => any,
  /**
   * Create a new entry with the provided values
   * @param values A set of key-value pairs
   * @returns The ID of the newly-created entry
   */
  create: (table: string, values: { [key: string ]: any }) => number | bigint,
  /**
   * Update an entry by ID with the provided values
   * @param values A set of key-value pairs
   * @returns Whether the entry was successfully updated
   */
  update: (table: string, id: number | bigint, values: { [key: string ]: any }) => boolean,
  /**
   * Delete an entry by ID
   * @returns Whether the entry was successfully deleted
   */
  remove: (table: string, id: number | bigint) => boolean,
}

/** Database manager implementation */
const db = new SQLite3(':memory:', true);

export default db;
