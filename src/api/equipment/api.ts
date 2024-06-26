/* tslint:disable */
/* eslint-disable */
/**
 * Ambulance Equipment Api
 * Ambulance Equipment management for Web-In-Cloud system
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: <your_email>
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Ambulance
 */
export interface Ambulance {
    /**
     * Unique identifier for the ambulance
     * @type {string}
     * @memberof Ambulance
     */
    'id': string;
    /**
     * Name of the ambulance
     * @type {string}
     * @memberof Ambulance
     */
    'name': string;
    /**
     * List of the ambulance equipment
     * @type {Array<Equipment>}
     * @memberof Ambulance
     */
    'equipment': Array<Equipment>;
}
/**
 * 
 * @export
 * @interface Equipment
 */
export interface Equipment {
    /**
     * Unique identifier for the equipment
     * @type {string}
     * @memberof Equipment
     */
    'id': string;
    /**
     * Name of the equipment
     * @type {string}
     * @memberof Equipment
     */
    'name': string;
    /**
     * Availability status of the equipment
     * @type {string}
     * @memberof Equipment
     */
    'availability': string;
    /**
     * Date of the last inspection
     * @type {string}
     * @memberof Equipment
     */
    'lastInspectionDate': string;
    /**
     * Technical condition rating of the equipment
     * @type {number}
     * @memberof Equipment
     */
    'technicalCondition': number;
    /**
     * Inspection interval in months
     * @type {number}
     * @memberof Equipment
     */
    'inspectionInterval': number;
}

/**
 * AmbulancesApi - axios parameter creator
 * @export
 */
export const AmbulancesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create new ambulance in the system
         * @summary Create new ambulance
         * @param {Ambulance} ambulance Ambulance details to store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAmbulance: async (ambulance: Ambulance, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulance' is not null or undefined
            assertParamExists('createAmbulance', 'ambulance', ambulance)
            const localVarPath = `/ambulances`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(ambulance, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Use this method to delete the specific ambulance by its ID
         * @summary Deletes specific ambulance
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAmbulance: async (ambulanceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('deleteAmbulance', 'ambulanceId', ambulanceId)
            const localVarPath = `/ambulances/{ambulanceId}`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a list of all ambulances
         * @summary Provides the list of ambulances
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAmbulanceList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ambulances`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AmbulancesApi - functional programming interface
 * @export
 */
export const AmbulancesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AmbulancesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create new ambulance in the system
         * @summary Create new ambulance
         * @param {Ambulance} ambulance Ambulance details to store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAmbulance(ambulance: Ambulance, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Ambulance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAmbulance(ambulance, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Use this method to delete the specific ambulance by its ID
         * @summary Deletes specific ambulance
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAmbulance(ambulanceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAmbulance(ambulanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a list of all ambulances
         * @summary Provides the list of ambulances
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAmbulanceList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Ambulance>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAmbulanceList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AmbulancesApi - factory interface
 * @export
 */
export const AmbulancesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AmbulancesApiFp(configuration)
    return {
        /**
         * Create new ambulance in the system
         * @summary Create new ambulance
         * @param {Ambulance} ambulance Ambulance details to store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAmbulance(ambulance: Ambulance, options?: any): AxiosPromise<Ambulance> {
            return localVarFp.createAmbulance(ambulance, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this method to delete the specific ambulance by its ID
         * @summary Deletes specific ambulance
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAmbulance(ambulanceId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteAmbulance(ambulanceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of all ambulances
         * @summary Provides the list of ambulances
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAmbulanceList(options?: any): AxiosPromise<Array<Ambulance>> {
            return localVarFp.getAmbulanceList(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AmbulancesApi - interface
 * @export
 * @interface AmbulancesApi
 */
export interface AmbulancesApiInterface {
    /**
     * Create new ambulance in the system
     * @summary Create new ambulance
     * @param {Ambulance} ambulance Ambulance details to store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulancesApiInterface
     */
    createAmbulance(ambulance: Ambulance, options?: AxiosRequestConfig): AxiosPromise<Ambulance>;

    /**
     * Use this method to delete the specific ambulance by its ID
     * @summary Deletes specific ambulance
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulancesApiInterface
     */
    deleteAmbulance(ambulanceId: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * Retrieves a list of all ambulances
     * @summary Provides the list of ambulances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulancesApiInterface
     */
    getAmbulanceList(options?: AxiosRequestConfig): AxiosPromise<Array<Ambulance>>;

}

/**
 * AmbulancesApi - object-oriented interface
 * @export
 * @class AmbulancesApi
 * @extends {BaseAPI}
 */
export class AmbulancesApi extends BaseAPI implements AmbulancesApiInterface {
    /**
     * Create new ambulance in the system
     * @summary Create new ambulance
     * @param {Ambulance} ambulance Ambulance details to store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulancesApi
     */
    public createAmbulance(ambulance: Ambulance, options?: AxiosRequestConfig) {
        return AmbulancesApiFp(this.configuration).createAmbulance(ambulance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use this method to delete the specific ambulance by its ID
     * @summary Deletes specific ambulance
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulancesApi
     */
    public deleteAmbulance(ambulanceId: string, options?: AxiosRequestConfig) {
        return AmbulancesApiFp(this.configuration).deleteAmbulance(ambulanceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a list of all ambulances
     * @summary Provides the list of ambulances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulancesApi
     */
    public getAmbulanceList(options?: AxiosRequestConfig) {
        return AmbulancesApiFp(this.configuration).getAmbulanceList(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EquipmentApi - axios parameter creator
 * @export
 */
export const EquipmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create new equipment to a specific ambulance
         * @summary Create new equipment to an ambulance
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {Equipment} equipment Equipment object that needs to be created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEquipment: async (ambulanceId: string, equipment: Equipment, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('createEquipment', 'ambulanceId', ambulanceId)
            // verify required parameter 'equipment' is not null or undefined
            assertParamExists('createEquipment', 'equipment', equipment)
            const localVarPath = `/ambulances/{ambulanceId}/equipment`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(equipment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a specific equipment item by its ID from a specific ambulance
         * @summary Delete specific equipment
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {string} equipmentId ID of the specific equipment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEquipmentById: async (ambulanceId: string, equipmentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('deleteEquipmentById', 'ambulanceId', ambulanceId)
            // verify required parameter 'equipmentId' is not null or undefined
            assertParamExists('deleteEquipmentById', 'equipmentId', equipmentId)
            const localVarPath = `/ambulances/{ambulanceId}/equipment/{equipmentId}`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)))
                .replace(`{${"equipmentId"}}`, encodeURIComponent(String(equipmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve details of a specific equipment item by its ID from a specific ambulance
         * @summary Get specific equipment details
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {string} equipmentId ID of the specific equipment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEquipmentById: async (ambulanceId: string, equipmentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('getEquipmentById', 'ambulanceId', ambulanceId)
            // verify required parameter 'equipmentId' is not null or undefined
            assertParamExists('getEquipmentById', 'equipmentId', equipmentId)
            const localVarPath = `/ambulances/{ambulanceId}/equipment/{equipmentId}`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)))
                .replace(`{${"equipmentId"}}`, encodeURIComponent(String(equipmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a list of equipment for a specific ambulance by its ID
         * @summary Provides the equipment list for a specific ambulance
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEquipmentList: async (ambulanceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('getEquipmentList', 'ambulanceId', ambulanceId)
            const localVarPath = `/ambulances/{ambulanceId}/equipment`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update details of a specific equipment item by its ID from a specific ambulance
         * @summary Update specific equipment details
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {string} equipmentId ID of the specific equipment
         * @param {Equipment} equipment Equipment object that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEquipmentById: async (ambulanceId: string, equipmentId: string, equipment: Equipment, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('updateEquipmentById', 'ambulanceId', ambulanceId)
            // verify required parameter 'equipmentId' is not null or undefined
            assertParamExists('updateEquipmentById', 'equipmentId', equipmentId)
            // verify required parameter 'equipment' is not null or undefined
            assertParamExists('updateEquipmentById', 'equipment', equipment)
            const localVarPath = `/ambulances/{ambulanceId}/equipment/{equipmentId}`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)))
                .replace(`{${"equipmentId"}}`, encodeURIComponent(String(equipmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(equipment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EquipmentApi - functional programming interface
 * @export
 */
export const EquipmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EquipmentApiAxiosParamCreator(configuration)
    return {
        /**
         * Create new equipment to a specific ambulance
         * @summary Create new equipment to an ambulance
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {Equipment} equipment Equipment object that needs to be created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEquipment(ambulanceId: string, equipment: Equipment, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Equipment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEquipment(ambulanceId, equipment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a specific equipment item by its ID from a specific ambulance
         * @summary Delete specific equipment
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {string} equipmentId ID of the specific equipment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEquipmentById(ambulanceId: string, equipmentId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteEquipmentById(ambulanceId, equipmentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve details of a specific equipment item by its ID from a specific ambulance
         * @summary Get specific equipment details
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {string} equipmentId ID of the specific equipment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEquipmentById(ambulanceId: string, equipmentId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Equipment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEquipmentById(ambulanceId, equipmentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a list of equipment for a specific ambulance by its ID
         * @summary Provides the equipment list for a specific ambulance
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEquipmentList(ambulanceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Equipment>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEquipmentList(ambulanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update details of a specific equipment item by its ID from a specific ambulance
         * @summary Update specific equipment details
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {string} equipmentId ID of the specific equipment
         * @param {Equipment} equipment Equipment object that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEquipmentById(ambulanceId: string, equipmentId: string, equipment: Equipment, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Equipment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEquipmentById(ambulanceId, equipmentId, equipment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EquipmentApi - factory interface
 * @export
 */
export const EquipmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EquipmentApiFp(configuration)
    return {
        /**
         * Create new equipment to a specific ambulance
         * @summary Create new equipment to an ambulance
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {Equipment} equipment Equipment object that needs to be created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEquipment(ambulanceId: string, equipment: Equipment, options?: any): AxiosPromise<Equipment> {
            return localVarFp.createEquipment(ambulanceId, equipment, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a specific equipment item by its ID from a specific ambulance
         * @summary Delete specific equipment
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {string} equipmentId ID of the specific equipment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEquipmentById(ambulanceId: string, equipmentId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteEquipmentById(ambulanceId, equipmentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve details of a specific equipment item by its ID from a specific ambulance
         * @summary Get specific equipment details
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {string} equipmentId ID of the specific equipment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEquipmentById(ambulanceId: string, equipmentId: string, options?: any): AxiosPromise<Equipment> {
            return localVarFp.getEquipmentById(ambulanceId, equipmentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of equipment for a specific ambulance by its ID
         * @summary Provides the equipment list for a specific ambulance
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEquipmentList(ambulanceId: string, options?: any): AxiosPromise<Array<Equipment>> {
            return localVarFp.getEquipmentList(ambulanceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update details of a specific equipment item by its ID from a specific ambulance
         * @summary Update specific equipment details
         * @param {string} ambulanceId ID of the particular ambulance
         * @param {string} equipmentId ID of the specific equipment
         * @param {Equipment} equipment Equipment object that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEquipmentById(ambulanceId: string, equipmentId: string, equipment: Equipment, options?: any): AxiosPromise<Equipment> {
            return localVarFp.updateEquipmentById(ambulanceId, equipmentId, equipment, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EquipmentApi - interface
 * @export
 * @interface EquipmentApi
 */
export interface EquipmentApiInterface {
    /**
     * Create new equipment to a specific ambulance
     * @summary Create new equipment to an ambulance
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {Equipment} equipment Equipment object that needs to be created
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApiInterface
     */
    createEquipment(ambulanceId: string, equipment: Equipment, options?: AxiosRequestConfig): AxiosPromise<Equipment>;

    /**
     * Delete a specific equipment item by its ID from a specific ambulance
     * @summary Delete specific equipment
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {string} equipmentId ID of the specific equipment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApiInterface
     */
    deleteEquipmentById(ambulanceId: string, equipmentId: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * Retrieve details of a specific equipment item by its ID from a specific ambulance
     * @summary Get specific equipment details
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {string} equipmentId ID of the specific equipment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApiInterface
     */
    getEquipmentById(ambulanceId: string, equipmentId: string, options?: AxiosRequestConfig): AxiosPromise<Equipment>;

    /**
     * Retrieves a list of equipment for a specific ambulance by its ID
     * @summary Provides the equipment list for a specific ambulance
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApiInterface
     */
    getEquipmentList(ambulanceId: string, options?: AxiosRequestConfig): AxiosPromise<Array<Equipment>>;

    /**
     * Update details of a specific equipment item by its ID from a specific ambulance
     * @summary Update specific equipment details
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {string} equipmentId ID of the specific equipment
     * @param {Equipment} equipment Equipment object that needs to be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApiInterface
     */
    updateEquipmentById(ambulanceId: string, equipmentId: string, equipment: Equipment, options?: AxiosRequestConfig): AxiosPromise<Equipment>;

}

/**
 * EquipmentApi - object-oriented interface
 * @export
 * @class EquipmentApi
 * @extends {BaseAPI}
 */
export class EquipmentApi extends BaseAPI implements EquipmentApiInterface {
    /**
     * Create new equipment to a specific ambulance
     * @summary Create new equipment to an ambulance
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {Equipment} equipment Equipment object that needs to be created
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApi
     */
    public createEquipment(ambulanceId: string, equipment: Equipment, options?: AxiosRequestConfig) {
        return EquipmentApiFp(this.configuration).createEquipment(ambulanceId, equipment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a specific equipment item by its ID from a specific ambulance
     * @summary Delete specific equipment
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {string} equipmentId ID of the specific equipment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApi
     */
    public deleteEquipmentById(ambulanceId: string, equipmentId: string, options?: AxiosRequestConfig) {
        return EquipmentApiFp(this.configuration).deleteEquipmentById(ambulanceId, equipmentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve details of a specific equipment item by its ID from a specific ambulance
     * @summary Get specific equipment details
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {string} equipmentId ID of the specific equipment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApi
     */
    public getEquipmentById(ambulanceId: string, equipmentId: string, options?: AxiosRequestConfig) {
        return EquipmentApiFp(this.configuration).getEquipmentById(ambulanceId, equipmentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a list of equipment for a specific ambulance by its ID
     * @summary Provides the equipment list for a specific ambulance
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApi
     */
    public getEquipmentList(ambulanceId: string, options?: AxiosRequestConfig) {
        return EquipmentApiFp(this.configuration).getEquipmentList(ambulanceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update details of a specific equipment item by its ID from a specific ambulance
     * @summary Update specific equipment details
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {string} equipmentId ID of the specific equipment
     * @param {Equipment} equipment Equipment object that needs to be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApi
     */
    public updateEquipmentById(ambulanceId: string, equipmentId: string, equipment: Equipment, options?: AxiosRequestConfig) {
        return EquipmentApiFp(this.configuration).updateEquipmentById(ambulanceId, equipmentId, equipment, options).then((request) => request(this.axios, this.basePath));
    }
}


