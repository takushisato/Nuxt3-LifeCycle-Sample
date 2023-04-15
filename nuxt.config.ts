// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig だと何故か動かない
export default ({
    ssr: true,
    components: ['@/components', '@/components/parts', '@/components/blocks', '@/components/forms'],
    modules: [],
    srcDir: 'src/',
})
