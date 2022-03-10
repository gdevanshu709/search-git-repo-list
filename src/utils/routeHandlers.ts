import { GIT_BASE_URL } from "../constant/constants"

export const searchGitRepoRoute = (search: string, page: string, per_page: string, order: string, sort: string) => {
    return `${GIT_BASE_URL}search/code?q=${search}+in:file&page=${page}&per_page=${per_page}&order=${order}&sort=${sort}`
}