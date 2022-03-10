import { RequestHandler } from 'express'
import { fetchGitRepoList } from '../services/gitRepoService'
import { ASC_ORDER } from '../constant/constants'
import { SUCCESS } from '../constant/errorCodes'
import { PER_PAGE } from '../constant/constants';

const gitRepoController: RequestHandler = async (req, res) => {
    try {
        const search: string = req.query.search as string
        const page: string = req.query.page as string
        const per_page: string = req.query.per_page as string || PER_PAGE
        const order: string = (req.query.order as string) || ASC_ORDER
        const sort: string = req.query.sort as string

        const getRepo = await fetchGitRepoList(
            page,
            order,
            search,
            per_page,
            sort
        )
        const data = getRepo?.data?.items;

        return res.status(SUCCESS).json({ data })
    } catch (e: any) {
        res.status(403).json({e})
    }
}

export default gitRepoController
