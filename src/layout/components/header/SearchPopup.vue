<template>
	<el-popover
		popper-style="max-width:auto;padding:0;"
		v-model:visible="showSearchView"
		width="250px"
	>
		<template #reference>
			<el-input
				v-model="searchKeyword"
				placeholder="请输入关键词"
				size="default"
				:prefix-icon="Search"
				clearable
				@input="searchInput"
				@focus="showSearchView = true"
				@blur="showSearchView = false"
			></el-input>
		</template>
		<div class="h-96">
			<el-scrollbar>
				<div class="pb-2.5">
					<div v-if="showHot">
						<div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
						<div>
							<div
								v-for="(item, index) in searchHot"
								:key="item.searchWord"
								class="py-2.5 px-2.5 hover-text cursor-pointer flex justify-between items-center text-xs"
								@click="hotClick(item.searchWord)"
							>
								<div>
									<span class="mr-1">{{ index + 1 }}.</span>
									<span>{{ item.searchWord }}</span>
								</div>
								<div class="text-red-300 text-xs">
									{{ item.score.numberFormat() }}
								</div>
							</div>
						</div>
					</div>
					<SearchSuggest v-else />
				</div>
			</el-scrollbar>
		</div>
	</el-popover>
</template>
<script lang="ts" setup>
import { Search } from '@icon-park/vue-next'
import { findMusic, findHotMusic } from '@/http/search'
import type { SearchHotDetail } from '@/models/search'

import { debounce } from 'lodash'

let showSearchView = ref(false)
let searchKeyword = ref('')
let searchHot = reactive<SearchHotDetail[]>([])

const suggest = async () => {
	await findMusic({
		keywords: searchKeyword
	})
}
const searchInput = debounce(() => suggest(), 500, {
	maxWait: 1000
})
const hotClick = async text => {
	searchKeyword.value = text
	await findHotMusic()
	showSearchView.value = true
}
const showHot = computed(() => {
	return searchKeyword.value == ''
})
onMounted(async () => {
	searchHot = (await findHotMusic()) as SearchHotDetail[]
})
</script>
