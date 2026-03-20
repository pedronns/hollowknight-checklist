import gameData from './gameData.json'
import Label from './components/Label'
import './App.css'
import { useMemo, useState, useEffect } from 'react'
import { getUrl } from './lib/links'
import { createT } from './lib/locales/pt'
import { ItemRow } from './components/ItemRow'
import Footer from './components/Footer'
import { ProgressBar } from './components/ProgressBar'

type Lang = 'pt' | 'en'

const sections: Record<string, Item[]> = Object.fromEntries(
	Object.entries(gameData).map(([sectionName, sectionData]) => {
		const items = Array.isArray(sectionData)
			? sectionData
			: Object.values(sectionData)

		return [
			sectionName,
			items.map((item) => ({
				...item,
				section: sectionName,
			})),
		]
	}),
)

const allItems = Object.values(sections).flat()

function App() { 
	const saved = localStorage.getItem('checkedFields')
	const parsed = saved ? JSON.parse(saved) : []
	const [checkedFields, setCheckedFields] = useState(new Set(parsed))
	
	const savedLanguage = localStorage.getItem('language')
	const [language, setLanguage] = useState<Lang>(
		savedLanguage === 'en' ? 'en' : 'pt',
	)
	const t = createT(language)

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'))
	}

	useEffect(() => {
		localStorage.setItem('checkedFields', JSON.stringify([...checkedFields]))
	}, [checkedFields])

	useEffect(() => {
		localStorage.setItem('language', language)
	}, [language])
 
	const progress = useMemo(() => {
		return allItems.reduce((acc, cur) => (checkedFields.has(cur.id) ? acc + cur.percent : acc), 0)
	}, [checkedFields])
	
	const remaining = allItems.length - checkedFields.size

  return (
		<>
			<div
				className="min-h-screen text-white items-center pt-4 md:px-0 px-4 justify-center text-center
                bg-[url('/img/background.png')] 
                bg-fixed 
                bg-center 
                bg-no-repeat"
			>
				<header className="flex mb-2 rounded-xl w-full mx-auto  max-w-6xl flex-col py-8 px-4 sm:px-6 md:px-8 bg-black/70 relative">
					<img
						src="/img/title_large.png"
						alt="Hollow Knight"
						className="mx-auto mb-2 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
					/>
					<button onClick={() => toggleLanguage()} className='absolute right-5 top-4 text-xs'>
						{language?.toUpperCase()}
					</button>
					<h1 className="text-3xl sm:text-4xl font-bold mb-2">
						Checklist 112%
					</h1>

					<h2 className="text-lg sm:text-xl mb-2 capitalize">
						{remaining == 0 && t('no_items_left')}
						{remaining == 1 && `${remaining} ${t('item_left')}`}
						{remaining >= 2 && `${remaining} ${t('items_left')}`}
					</h2>

					<button
						className="underline text-white/90 hover:text-white mb-4 capitalize"
						onClick={() => {
							setCheckedFields(
								checkedFields.size === allItems.length
									? new Set()
									: new Set(allItems.map((item) => item.id)),
							)
						}}
					>
						{checkedFields.size === allItems.length
							? t('uncheck_all')
							: t('check_all')}
					</button>

					<h2 className="text-4xl sm:text-6xl font-bold mb-6">
						{progress.toFixed()}% {t('feito')}
					</h2>
				</header>

				<main className="flex min-h-screen w-full mx-auto rounded-xl max-w-6xl flex-col py-8 px-4 sm:px-6 md:px-8 bg-black/70">
					<div className="columns-1 sm:columns-2 md:columns-3 gap-4 w-full">
						{Object.entries(sections).map(
							([sectionName, sectionData]) => (
								<div
									key={sectionName}
									className="break-inside-avoid mb-4"
								>
									<div className="mx-auto mb-2 max-w-full">
										<a
											href={getUrl(sectionName)}
											target="_blank"
										>
											<Label title={t(sectionName)} />
										</a>
										<ProgressBar
											current={
												sectionData.filter((e) =>
													checkedFields.has(e.id),
												).length
											}
											total={sectionData.length}
										/>
									</div>
									<div className="bg-white/10 py-2 px-4 rounded-2xl">
										{sectionData.map((item) => (
											<ItemRow
												key={item.id}
												item={item}
												text={t(
													item.name ??
														item.description ??
														'',
												)}
												checked={checkedFields.has(
													item.id,
												)}
												url={item.url ?? ''}
												toggle={() => {
													setCheckedFields((prev) => {
														const copy = new Set(
															prev,
														)
														if (copy.has(item.id)) {
															copy.delete(item.id)
														} else {
															copy.add(item.id)
														}
														return copy
													})
												}}
											/>
										))}
									</div>
								</div>
							),
						)}
					</div>
				</main>
				<Footer lang={language} />
			</div>
		</>
  )
		}

export default App