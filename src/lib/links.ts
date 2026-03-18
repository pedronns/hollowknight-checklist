export const getUrl = (url: string) => {
  const sectionLink: Record<string, string> = {
    bosses: 'https://hollowknight.fandom.com/pt/wiki/Categoria:Chefes',
    equipment: 'https://hollowknight.fandom.com/pt/wiki/Categoria:Magias_e_Habilidades',
    spells: 'https://hollowknight.fandom.com/pt/wiki/Categoria:Magias_e_Habilidades',
    dream_nail: 'https://hollowknight.fandom.com/pt/wiki/Ferr%C3%A3o_dos_Sonhos',
    nail: 'https://hollowknight.fandom.com/pt/wiki/Ferr%C3%A3o',
    nail_arts: 'https://hollowknight.fandom.com/pt/wiki/Ferr%C3%A3o#Artes_do_Ferr%C3%A3o',
    vessel_fragments: 'https://hollowknight.fandom.com/pt/wiki/Fragmento_de_Recept%C3%A1culo',
    mask_shards: 'https://hollowknight.fandom.com/pt/wiki/Fragmento_de_M%C3%A1scara',
    charms: 'https://hollowknight.fandom.com/pt/wiki/Categoria:Amuletos',
    colosseum: 'https://hollowknight.fandom.com/pt/wiki/Coliseu_dos_Tolos',
    dreamers: '',
    godhome: '',
  }
  return sectionLink[url] || 'https://hollowknight.fandom.com/pt/wiki/Hollow_Knight_Wiki'
}