import axios from "axios";
import {
    BACKEND_BASE_URL,
    DOC_ID_QUERY_PARAM,
    NOTATIONS_METADATA_ENDPOINT,
    ALL,
    NOTATIONS_ENDPOINT,
    NOTATIONS_WORKFLOW_ENDPOINT, NOTATIONS_SEARCH_ENDPOINT
} from "./constants";

// APIs
export const getAllMetaDataRows = () => {
    return getMetaDataForDocId(ALL);
};

export const getMetaDataForDocId = async (docId: string) => {
    const response:any = await axios.get(`${BACKEND_BASE_URL}${NOTATIONS_METADATA_ENDPOINT}${DOC_ID_QUERY_PARAM}${docId}`)
        .catch(
            (errResponse: any) => {
                console.error(errResponse);
            });
    return response.data;
};

export const deleteNotation = async (docId: string) => {
    const response:any = await axios.delete(`${BACKEND_BASE_URL}${NOTATIONS_ENDPOINT}${DOC_ID_QUERY_PARAM}${docId}`)
        .catch(
            (errResponse: any) => {
                console.error(errResponse);
        });
    return response.data;
};

export const completeWorkflowGivenDocId = async (docId: string) => {
    const response:any = await axios.get(`${BACKEND_BASE_URL}${NOTATIONS_WORKFLOW_ENDPOINT}${DOC_ID_QUERY_PARAM}${docId}`)
        .catch(
            (errResponse: any) => {
                console.error(errResponse);
            });
    return response.data;
};

export const search = async (request: Notation) => {
    const response:any = await axios.post(`${BACKEND_BASE_URL}${NOTATIONS_SEARCH_ENDPOINT}`, request)
        .catch(
            (errResponse: any) => {
                console.error(errResponse);
            });
    return response.data;
}

export const updateMetaDataInLegend = async (request: Notation) => {
    const response:any = await axios.put(`${BACKEND_BASE_URL}${NOTATIONS_METADATA_ENDPOINT}`, request)
        .catch(
            (errResponse: any) => {
                console.error(errResponse);
            });
    return response.data;
}

export const createEmptyNotationDocument = async (request: Notation) => {
    const response:any = await axios.post(`${BACKEND_BASE_URL}${NOTATIONS_ENDPOINT}`, request)
        .catch(
            (errResponse: any) => {
                console.error(errResponse);
            });
    return response.data;
}

export const updateNotationsIntoDocs = async (request: Notation) => {
    const response:any = await axios.put(`${BACKEND_BASE_URL}${NOTATIONS_ENDPOINT}`, request)
        .catch(
            (errResponse: any) => {
                console.error(errResponse);
            });
    return response.data;
}