import {create} from "zustand";
import {persist} from "zustand/middleware";

// inicializa o estado inicial do seu aplicativo
let appStore = (set) => ({
    dopen: true,
    updateOpen:(dopen) => set((state) => ({dopen:dopen})),
});

//Isso significa que o estado gerenciado por appStore será persistido localmente,
// e a persistência será associada ao nome "my_app_store".
appStore = persist (appStore, {name:"my_app_store"});
export const useAppStore = create(appStore);