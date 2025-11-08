export interface IContact {
    name: string;
    phoneNumber: number;
    id: string;
}

export interface IPhoneBookState {
    contacts: IContact[];
    filter: string;
    name: string;
    phoneNumber: string;
}
