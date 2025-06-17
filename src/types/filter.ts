import { filters } from "../const"

type Project = {
    img: string;
    category: string;
}

type Filter = typeof filters[number]

export type {
    Project,
    Filter
}