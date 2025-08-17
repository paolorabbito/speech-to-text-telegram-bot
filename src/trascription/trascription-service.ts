import { LanguageList, ModelsList } from "./types"

export class TrascriptionService {
    constructor(
        private apiKey: string, 
        private model: ModelsList = 'voxtral-mini-latest',
        private language: LanguageList = 'it',
        private url: string = process.env.MISTRAL_URL ?? ''
    ) {}

    async trascribe(audioUrl: string) {
        const form = new FormData()
        form.append('file_url', audioUrl)
        form.append('model', this.model)
        form.append('language', this.language)

        

        const result = await (await fetch(`${this.url}/audio/transcriptions`, {
            method: 'POST',
            headers: {
            'x-api-key': this.apiKey,
            },
            body: form,
        })).json()

        return result.text;
    }
}
