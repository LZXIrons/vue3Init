declare global {
	interface ViteEnvConfig extends Readonly<Record<string, string>> {
		VITE_GLOB_APP_TITLE?: string
		VITE_LEGACY?: false
	}
	interface ViteEnv {}
}
export {}
