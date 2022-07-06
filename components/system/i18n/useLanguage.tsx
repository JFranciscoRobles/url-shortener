import { useRouter } from "next/router";
import es from "@/utils/locales/es.json";
import en from "@/utils/locales/en.json";

export const useLanguage = () => {
	const { locale:language } = useRouter();
	const text = language === "es" ? es : en;
	
	return {
		text,
		language,
	};			
};