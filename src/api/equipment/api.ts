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
 * @interface AmbulanceList
 */
export interface AmbulanceList {
    /**
     * Unique identifier for the ambulance
     * @type {string}
     * @memberof AmbulanceList
     */
    'id': string;
    /**
     * Name of the ambulance
     * @type {string}
     * @memberof AmbulanceList
     */
    'name': string;
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
 * AmbulanceListApi - axios parameter creator
 * @export
 */
export const AmbulanceListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a list of all ambulances
         * @summary Provides the list of ambulances
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAmbulanceList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ambulance-list`;
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
 * AmbulanceListApi - functional programming interface
 * @export
 */
export const AmbulanceListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AmbulanceListApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves a list of all ambulances
         * @summary Provides the list of ambulances
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAmbulanceList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AmbulanceList>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAmbulanceList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AmbulanceListApi - factory interface
 * @export
 */
export const AmbulanceListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AmbulanceListApiFp(configuration)
    return {
        /**
         * Retrieves a list of all ambulances
         * @summary Provides the list of ambulances
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAmbulanceList(options?: any): AxiosPromise<Array<AmbulanceList>> {
            return localVarFp.getAmbulanceList(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AmbulanceListApi - interface
 * @export
 * @interface AmbulanceListApi
 */
export interface AmbulanceListApiInterface {
    /**
     * Retrieves a list of all ambulances
     * @summary Provides the list of ambulances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceListApiInterface
     */
    getAmbulanceList(options?: AxiosRequestConfig): AxiosPromise<Array<AmbulanceList>>;

}

/**
 * AmbulanceListApi - object-oriented interface
 * @export
 * @class AmbulanceListApi
 * @extends {BaseAPI}
 */
export class AmbulanceListApi extends BaseAPI implements AmbulanceListApiInterface {
    /**
     * Retrieves a list of all ambulances
     * @summary Provides the list of ambulances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceListApi
     */
    public getAmbulanceList(options?: AxiosRequestConfig) {
        return AmbulanceListApiFp(this.configuration).getAmbulanceList(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EquipmentListApi - axios parameter creator
 * @export
 */
export const EquipmentListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
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
            const localVarPath = `/equipment-list/{ambulanceId}`
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
    }
};

/**
 * EquipmentListApi - functional programming interface
 * @export
 */
export const EquipmentListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EquipmentListApiAxiosParamCreator(configuration)
    return {
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
    }
};

/**
 * EquipmentListApi - factory interface
 * @export
 */
export const EquipmentListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EquipmentListApiFp(configuration)
    return {
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
    };
};

/**
 * EquipmentListApi - interface
 * @export
 * @interface EquipmentListApi
 */
export interface EquipmentListApiInterface {
    /**
     * Retrieves a list of equipment for a specific ambulance by its ID
     * @summary Provides the equipment list for a specific ambulance
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentListApiInterface
     */
    getEquipmentList(ambulanceId: string, options?: AxiosRequestConfig): AxiosPromise<Array<Equipment>>;

}

/**
 * EquipmentListApi - object-oriented interface
 * @export
 * @class EquipmentListApi
 * @extends {BaseAPI}
 */
export class EquipmentListApi extends BaseAPI implements EquipmentListApiInterface {
    /**
     * Retrieves a list of equipment for a specific ambulance by its ID
     * @summary Provides the equipment list for a specific ambulance
     * @param {string} ambulanceId ID of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentListApi
     */
    public getEquipmentList(ambulanceId: string, options?: AxiosRequestConfig) {
        return EquipmentListApiFp(this.configuration).getEquipmentList(ambulanceId, options).then((request) => request(this.axios, this.basePath));
    }
}


