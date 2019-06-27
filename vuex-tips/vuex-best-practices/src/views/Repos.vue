<template>
	<div v-if="isLoaded" class="repos">
		<h1>Creating since: {{ repoFilterCreatedAt[0] }}</h1>
		<h1>Lates Creation was on: {{ repoFilterCreatedAt[repoFilterCreatedAt.length - 1] }}</h1>
		<repositories></repositories>
	</div>
	<div v-else>
		<repositories-placeholder></repositories-placeholder>
	</div>
</template>

<script>
	import RepositoriesPlaceholder from "@/components/RepositoriesPlaceholder"
	import Repositories from '@/components/Repositories'
	import {mapState, mapGetters} from 'vuex'

	export default {
		name: "Repos",
		components: {
			Repositories,
			RepositoriesPlaceholder,
		},
		computed: {
			...mapState(['repos']),
			...mapGetters(['repoFilterCreatedAt']),
			isLoaded() {
				if (this.repos.length >= 1) {
					console.log("%Reset isLoaded",
							"font-weight: bold; color: white; background: green;")
					return true
				}

				return false
			}
		}
	}
</script>

<style scoped>

</style>
