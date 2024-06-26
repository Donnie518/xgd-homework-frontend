import request from "@/utils/request.ts";
import {
    empInfoListResponse,
} from "@/api/emp/types.ts";
import {Stu, StuInfoListRequest} from "@/api/stu/types.ts";

enum API {
    STU_INFO_LIST_URL = '/stu',
    ADD_STU_URL = '/stu',
    UPDATE_STU_URL = '/stu',
    DELETE_BATCH_STU_URL = '/stu',
}



export const reqStuInfoList = (data:StuInfoListRequest) => request.get<any, empInfoListResponse>(API.STU_INFO_LIST_URL, {params:data})
export const addStu = (data:Stu) => request.post<any, any>(API.ADD_STU_URL, data)
export const updateStu = (data:Stu) => request.post<any, any>(API.UPDATE_STU_URL, data)

export const getStuById = (stuId:string) => request.get<any, any>(`/stu/${stuId}`)
export const deleteBatchStu = (stuIds:number[]) => request.delete<any, any>(API.DELETE_BATCH_STU_URL,{data:stuIds})
