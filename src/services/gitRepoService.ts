import axios from '../utils/axios'
import { CustomError } from '../utils/customError'
import { FORBIDDEN } from '../constant/errorCodes'
import { searchGitRepoRoute } from '../utils/routeHandlers';

export const fetchGitRepoList = async (
    page: string,
    order: string,
    search: string,
    per_page: string,
    sort: string
) => {
    try {
        const url = searchGitRepoRoute(search, page, per_page, order, sort)
        const data = await axios.get(url)
        return data
    } catch (e: any) {
        throw new CustomError(e.message, FORBIDDEN)
    }
}
