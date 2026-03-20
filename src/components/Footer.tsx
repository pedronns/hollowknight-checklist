type Props = {
	lang: string
}

const Footer = ({lang}: Props) => {
	if (lang == 'pt') {
		return (
			<div className="flex mt-2 text-sm gap-y-4 rounded-t-xl w-50 mx-auto  max-w-6xl flex-col py-8 px-4 sm:px-6 md:px-8 bg-black/70">
				<section>
					<p>
						Este projeto é de livre reprodução e foi baseado na{' '}
						<a
							className="underline"
							href="https://hollowknightchecklist.com/"
						>
							versão em inglês
						</a>
						.
					</p>

					<p>
						Código disponível no{' '}
						<a
							href="https://github.com/pedronns/hollowknight-checklist"
							className="underline"
						>
							GitHub
						</a>
						.
					</p>
				</section>
				<section>
					<p>
						Créditos à{' '}
						<a
							className="underline"
							href="https://teamcherry.com.au/"
						>
							Team Cherry
						</a>{' '}
						pela criação dos sprites; a{' '}
						<a
							className="underline"
							href="https://www.reddit.com/user/sumwann/"
						>
							sumwann
						</a>{' '}
						pela extração dos arquivos; e a{' '}
						<a
							className="underline"
							href="https://www.reddit.com/user/nebulatron/"
						>
							nebulatron
						</a>{' '}
						pelos dados utilizados.
					</p>

					<p>
						Conteúdo complementado com informações da{' '}
						<a
							className="underline"
							href="https://hollowknight.fandom.com/wiki"
						>
							Wiki
						</a>
						.
					</p>
				</section>
				<section>
					<p>
						Este é um projeto de fã e não possui qualquer associação
						com a{' '}
						<a
							className="underline"
							href="https://teamcherry.com.au/"
						>
							Team Cherry
						</a>
						.
					</p>

					<p>
						<a
							className="underline"
							href="https://store.steampowered.com/app/367520/Hollow_Knight/"
						>
							Compre Hollow Knight
						</a>{' '}
						e aproveite a experiência!
					</p>
				</section>
			</div>
		)
	}

	if(lang == 'en') {
		return (
			<div className="flex mt-2 text-sm gap-y-4 rounded-t-xl w-50 mx-auto max-w-6xl flex-col py-8 px-4 sm:px-6 md:px-8 bg-black/70">
				<section>
					<p>
						This is a free and open-source project, based on the
						original{' '}
						<a
							className="underline"
							href="https://hollowknightchecklist.com/"
						>
							English version
						</a>
						.
					</p>

					<p>
						Source code available on{' '}
						<a
							href="https://github.com/pedronns/hollowknight-checklist"
							className="underline"
						>
							GitHub
						</a>
						.
					</p>
				</section>

				<section>
					<p>
						Credits to{' '}
						<a
							className="underline"
							href="https://teamcherry.com.au/"
						>
							Team Cherry
						</a>{' '}
						for creating the sprites; to{' '}
						<a
							className="underline"
							href="https://www.reddit.com/user/sumwann/"
						>
							sumwann
						</a>{' '}
						for extracting the files; and to{' '}
						<a
							className="underline"
							href="https://www.reddit.com/user/nebulatron/"
						>
							nebulatron
						</a>{' '}
						for providing the data.
					</p>

					<p>
						Content supplemented with information from the brazilian{' '}
						<a
							className="underline"
							href="https://hollowknight.fandom.com/wiki"
						>
							Hollow Knight Wiki
						</a>
						.
					</p>
				</section>

				<section>
					<p>
						This is a fan project and is not affiliated with{' '}
						<a
							className="underline"
							href="https://teamcherry.com.au/"
						>
							Team Cherry
						</a>
						.
					</p>

					<p>
						<a
							className="underline"
							href="https://store.steampowered.com/app/367520/Hollow_Knight/"
						>
							Buy Hollow Knight
						</a>{' '}
						and enjoy the experience!
					</p>
				</section>
			</div>
		)
	}
}

export default Footer