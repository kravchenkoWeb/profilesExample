import profiles from "@/data/profiles.json";

export default defineEventHandler((event) => {
    return profiles;
});