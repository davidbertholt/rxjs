import { GitHubUser } from "./gihub-user.interface";

export interface GitHubUsers {
    total_count:        number;
    incomplete_results: boolean;
    items:              GitHubUser[];
}