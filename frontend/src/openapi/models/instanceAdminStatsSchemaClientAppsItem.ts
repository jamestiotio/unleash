/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { InstanceAdminStatsSchemaClientAppsItemRange } from './instanceAdminStatsSchemaClientAppsItemRange';

/**
 * An entry describing how many client applications has been observed over the defined range
 */
export type InstanceAdminStatsSchemaClientAppsItem = {
    /** A description of a time range */
    range?: InstanceAdminStatsSchemaClientAppsItemRange;
    /** The number of client applications that have been observed in this period */
    count?: number;
};