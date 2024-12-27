export type PaginationProps = {
    itemPerPage: number,
     totalPage:number, 
     paginate: (pageNumber: number) => void; 
     currentPage:number
}