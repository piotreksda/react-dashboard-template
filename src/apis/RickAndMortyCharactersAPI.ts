import { api } from "./configs/axiosConfig"
import { defineCancelApiObject } from "./configs/axiosUtils"
import { ApiResponse, Character, Info } from "./rickAndMortyIterfaces"

export const RickAndMortyApi = {
  get: async function (cancel = false) : Promise<Info<Character[]>> {
    const response = await api.request<Info<Character[]>>({
      url: `${rootUrl}character`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })
    await new Promise(r => setTimeout(r, 300));
    return response.data;
  },
}

const cancelApiObject = defineCancelApiObject(RickAndMortyApi)
const rootUrl = "https://rickandmortyapi.com/api/";