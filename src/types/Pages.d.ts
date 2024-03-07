export interface MetaDataPage {
    total: number;
    perPage: number; //10
    currentPage: number;
    lastPage: number;
    firstPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface Page<Data> {
    meta: MetaDataPage;
    data: Data[];
}
