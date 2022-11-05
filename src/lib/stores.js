import { writable } from "svelte/store";

export const prosperityLevel = writable(50);
export const prosperityChangeRate = writable(0);
export const prosperityEstimatedEffect = writable(0);

export const technologyLevel = writable(50);
export const technologyChangeRate = writable(0);
export const technologyEstimatedEffect = writable(0);

export const freedomLevel = writable(50);
export const freedomChangeRate = writable(0);
export const freedomEstimatedEffect = writable(0);

export const climateLevel = writable(50);
export const climateChangeRate = writable(0);
export const climateEstimatedEffect = writable(0);
