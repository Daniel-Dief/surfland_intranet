export default interface UserDTO {
    userId ?: number;
    name ?: string;
    login ?: string;
    password ?: string;
    accessProfileId ?: number;
    statusId ?: number;
    temporaryPassword ?: string | null;
    personId ?: number;
    updatedAt ?: string | null;
    updatedBy ?: number | null;
}