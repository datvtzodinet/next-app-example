export class BaseModel {
    id?: number;
    createdDate?: Date;
    createdBy?: string;
    updatedDate?: Date;
    updatedBy?: string;
    deletedDate?: Date;
    deletedBy?: string;
    deleted?: boolean;
}
