export interface Job {
	name: string;
	plural: string;
	type: string;
	traits: {
		primary: Skill;
		secondary: Skill;
	};
	effects: {
		primary: string;
		secondary: string;
	};
	buildings: string[];
}

export const skills = [
	'None',
	'Adaptability',
	'Agility',
	'Athletics',
	'Creativity',
	'Dexterity',
	'Focus',
	'Intelligence',
	'Knowledge',
	'Mana',
	'Stamina',
	'Strength'
] as const;
export type Skill = typeof skills extends ReadonlyArray<infer R> ? R : never;

const jobs: Job[] = [
	{
		name: 'Alchemist',
		plural: 'Alchemists',
		type: 'crafter',
		traits: {
			primary: 'Dexterity',
			secondary: 'Mana'
		},
		effects: {
			primary: 'Faster brewing',
			secondary: 'Able to use more brewing stands'
		},
		buildings: ['alchemist']
	},
	{
		name: 'Archer',
		plural: 'Archers',
		type: 'guard',
		traits: {
			primary: 'Agility',
			secondary: 'Adaptability'
		},
		effects: {
			primary: 'More damage',
			secondary: 'Greater range'
		},
		buildings: ['archery', 'barrackstower', 'guardtower']
	},
	{
		name: 'Assistant Cook',
		plural: 'Assistant Cooks',
		type: 'crafter',
		traits: {
			primary: 'Creativity',
			secondary: 'Knowledge'
		},
		effects: {
			primary: 'Faster cook time',
			secondary: 'Increases chance of decreasing materials needed'
		},
		buildings: ['restaurant']
	},
	{
		name: 'Baker',
		plural: 'Bakers',
		type: 'crafter',
		traits: {
			primary: 'Knowledge',
			secondary: 'Dexterity'
		},
		effects: {
			primary: 'Increases chance of decreasing materials needed',
			secondary: 'Faster crafting and smelting'
		},
		buildings: ['bakery']
	},
	{
		name: 'Beekeeper',
		plural: 'Beekeepers',
		type: 'animals',
		traits: {
			primary: 'Dexterity',
			secondary: 'Adaptability'
		},
		effects: {
			primary: 'Determines chance of *beeing* stung',
			secondary: 'Affects wait time between checking hives'
		},
		buildings: ['apiary']
	},
	{
		name: 'Blacksmith',
		plural: 'Blacksmiths',
		type: 'crafter',
		traits: {
			primary: 'Strength',
			secondary: 'Focus'
		},
		effects: {
			primary: 'Faster crafting',
			secondary: 'Increases chance of decreasing materials needed'
		},
		buildings: ['blacksmith']
	},
	{
		name: 'Builder',
		plural: 'Builders',
		type: 'other',
		traits: {
			primary: 'Adaptability',
			secondary: 'Athletics'
		},
		effects: {
			primary: 'Faster block placing',
			secondary: 'Faster block breaking'
		},
		buildings: ['builder']
	},
	{
		name: 'Carpenter',
		plural: 'Carpenters',
		type: 'crafter',
		traits: {
			primary: 'Knowledge',
			secondary: 'Dexterity'
		},
		effects: {
			primary: 'Increases chance of decreasing materials needed',
			secondary: 'Faster crafting'
		},
		buildings: ['sawmill']
	},
	{
		name: 'Chicken Farmer',
		plural: 'Chicken Farmers',
		type: 'animals',
		traits: {
			primary: 'Adaptability',
			secondary: 'Agility'
		},
		effects: {
			primary: 'Greater chance to pick up eggs/meat/feathers',
			secondary: 'Greater chance to successfully hit chicken'
		},
		buildings: ['chickenfarmer']
	},
	{
		name: 'Composter',
		plural: 'Composters',
		type: 'gatherer',
		traits: {
			primary: 'Stamina',
			secondary: 'Athletics'
		},
		effects: {
			primary: 'Faster composting',
			secondary: 'Faster barrel filling'
		},
		buildings: ['composter']
	},
	{
		name: 'Concrete Mixer',
		plural: 'Concrete Mixers',
		type: 'crafter',
		traits: {
			primary: 'Stamina',
			secondary: 'Dexterity'
		},
		effects: {
			primary: 'Faster concrete harvesting',
			secondary: 'Faster concrete crafting'
		},
		buildings: ['concretemixer']
	},
	{
		name: 'Cook',
		plural: 'Cooks',
		type: 'crafter',
		traits: {
			primary: 'Adaptability',
			secondary: 'Knowledge'
		},
		effects: {
			primary: 'Faster cook time',
			secondary: 'Increases chance of decreasing materials needed'
		},
		buildings: ['restaurant']
	},
	{
		name: 'Courier',
		plural: 'Couriers',
		type: 'other',
		traits: {
			primary: 'Agility',
			secondary: 'Adaptability'
		},
		effects: {
			primary: 'Faster run speed',
			secondary: 'More huts visited on each trip'
		},
		buildings: ['courier', 'warehouse']
	},
	{
		name: 'Cowhand',
		plural: 'Cowhands',
		type: 'animals',
		traits: {
			primary: 'Athletics',
			secondary: 'Stamina'
		},
		effects: {
			primary: 'More damage per attack',
			secondary: 'Cows grow up faster'
		},
		buildings: ['cowhand']
	},
	{
		name: 'Crusher',
		plural: 'Crushers',
		type: 'crafter',
		traits: {
			primary: 'Stamina',
			secondary: 'Strength'
		},
		effects: {
			primary: 'Decreases chance of sickness',
			secondary: 'Faster work speed'
		},
		buildings: ['crusher']
	},
	{
		name: 'Druid',
		plural: 'Druids',
		type: 'guard',
		traits: {
			primary: 'Mana',
			secondary: 'Focus'
		},
		effects: {
			primary: 'Increases potion duration',
			secondary: 'Increases throwing accuracy'
		},
		buildings: ['barrackstower', 'guardtower']
	},
	{
		name: 'Dyer',
		plural: 'Dyers',
		type: 'crafter',
		traits: {
			primary: 'Creativity',
			secondary: 'Dexterity'
		},
		effects: {
			primary: 'Increases chance of decreasing materials needed',
			secondary: 'Faster crafting'
		},
		buildings: ['dyer']
	},
	{
		name: 'Enchanter',
		plural: 'Enchanters',
		type: 'other',
		traits: {
			primary: 'Mana',
			secondary: 'Knowledge'
		},
		effects: {
			primary: 'More XP collected per trip',
			secondary: 'Higher level of enchanted books'
		},
		buildings: ['enchantertower']
	},
	{
		name: 'Farmer',
		plural: 'Farmers',
		type: 'gatherer',
		traits: {
			primary: 'Stamina',
			secondary: 'Athletics'
		},
		effects: {
			primary: 'Less time cycling between planting and harvesting',
			secondary: 'Faster planting and harvesting'
		},
		buildings: ['farm']
	},
	{
		name: 'Fisher',
		plural: 'Fishers',
		type: 'gatherer',
		traits: {
			primary: 'Focus',
			secondary: 'Agility'
		},
		effects: {
			primary: 'Less time to catch something',
			secondary: 'Less time to catch something'
		},
		buildings: ['fisher']
	},
	{
		name: 'Fletcher',
		plural: 'Fletchers',
		type: 'crafter',
		traits: {
			primary: 'Dexterity',
			secondary: 'Creativity'
		},
		effects: {
			primary: 'Faster crafting',
			secondary: 'Increases chance of decreasing materials needed'
		},
		buildings: ['fletcher']
	},
	{
		name: 'Florist',
		plural: 'Florists',
		type: 'gatherer',
		traits: {
			primary: 'Dexterity',
			secondary: 'Agility'
		},
		effects: {
			primary: 'Greater chance to successfully harvest flowers',
			secondary: 'Decreases flower growth time'
		},
		buildings: ['flowershop']
	},
	{
		name: 'Forester',
		plural: 'Foresters',
		type: 'gatherer',
		traits: {
			primary: 'Strength',
			secondary: 'Focus'
		},
		effects: {
			primary: 'Faster log breaking',
			secondary: 'Faster walking'
		},
		buildings: ['lumberjack']
	},
	{
		name: 'Glassblower',
		plural: 'Glassblowers',
		type: 'crafter',
		traits: {
			primary: 'Creativity',
			secondary: 'Focus'
		},
		effects: {
			primary: 'Increases chance of decreasing materials needed',
			secondary: 'Faster crafting'
		},
		buildings: ['glassblower']
	},
	{
		name: 'Healer',
		plural: 'Healers',
		type: 'other',
		traits: {
			primary: 'Mana',
			secondary: 'Knowledge'
		},
		effects: {
			primary: 'Faster walking between beds',
			secondary: 'Increases chance of decreasing materials needed'
		},
		buildings: ['hospital']
	},
	{
		name: 'Knight',
		plural: 'Knights',
		type: 'guard',
		traits: {
			primary: 'Adaptability',
			secondary: 'Stamina'
		},
		effects: {
			primary: 'Faster attack speed',
			secondary: 'Increased health'
		},
		buildings: ['combatacademy', 'barrackstower', 'guardtower']
	},
	{
		name: 'Library Student',
		plural: 'Library Students',
		type: 'other',
		traits: {
			primary: 'Intelligence',
			secondary: 'None'
		},
		effects: {
			primary: 'Affects leveling speed of other skills',
			secondary: 'None'
		},
		buildings: ['library']
	},
	{
		name: 'Mechanic',
		plural: 'Mechanics',
		type: 'crafter',
		traits: {
			primary: 'Knowledge',
			secondary: 'Agility'
		},
		effects: {
			primary: 'Increases chance of decreasing materials needed',
			secondary: 'Faster crafting'
		},
		buildings: ['mechanic']
	},
	{
		name: 'Miner',
		plural: 'Miners',
		type: 'gatherer',
		traits: {
			primary: 'Strength',
			secondary: 'Stamina'
		},
		effects: {
			primary: 'Faster block breaking',
			secondary: 'Faster block placing'
		},
		buildings: ['mine']
	},
	{
		name: 'Nether Miner',
		plural: 'Nether Miners',
		type: 'gatherer',
		traits: {
			primary: 'Adaptability',
			secondary: 'Strength'
		},
		effects: {
			primary: 'Survivability',
			secondary: 'Chance and quality of loot'
		},
		buildings: ['nethermine']
	},
	{
		name: 'Planter',
		plural: 'Planters',
		type: 'gatherer',
		traits: {
			primary: 'Agility',
			secondary: 'Dexterity'
		},
		effects: {
			primary: 'Increases chance of decreasing materials needed',
			secondary: 'Faster crafting'
		},
		buildings: ['plantation']
	},
	{
		name: 'Pupil',
		plural: 'Pupils',
		type: 'other',
		traits: {
			primary: 'Intelligence',
			secondary: 'Mana'
		},
		effects: {
			primary: 'None (Note: also uses Knowledge)',
			secondary: 'None'
		},
		buildings: ['school']
	},
	{
		name: 'Quarrier',
		plural: 'Quarriers',
		type: 'gatherer',
		traits: {
			primary: 'Strength',
			secondary: 'Stamina'
		},
		effects: {
			primary: 'Faster block breaking',
			secondary: 'Faster block placing'
		},
		buildings: ['quarry']
	},
	{
		name: 'Rabbit Herder',
		plural: 'Rabbit Herders',
		type: 'animals',
		traits: {
			primary: 'Agility',
			secondary: 'Athletics'
		},
		effects: {
			primary: 'Higher chance to successfully hit a rabbit',
			secondary: 'Faster rabbit growth'
		},
		buildings: ['rabbithutch']
	},
	{
		name: 'Shepherd',
		plural: 'Shepherds',
		type: 'animals',
		traits: {
			primary: 'Focus',
			secondary: 'Strength'
		},
		effects: {
			primary: 'More wool collected',
			secondary: 'More damage per attack'
		},
		buildings: ['shepherd']
	},
	{
		name: 'Sifter',
		plural: 'Sifters',
		type: 'gatherer',
		traits: {
			primary: 'Focus',
			secondary: 'Strength'
		},
		effects: {
			primary: 'Better quality items found',
			secondary: 'Faster sifting'
		},
		buildings: ['sifter']
	},
	{
		name: 'Smelter',
		plural: 'Smelters',
		type: 'gatherer',
		traits: {
			primary: 'Athletics',
			secondary: 'Strength'
		},
		effects: {
			primary: 'Faster smelting',
			secondary: 'Increases chance of doubling or tripling ores'
		},
		buildings: ['smeltery']
	},
	{
		name: 'Stonemason',
		plural: 'Stonemasons',
		type: 'crafter',
		traits: {
			primary: 'Creativity',
			secondary: 'Dexterity'
		},
		effects: {
			primary: 'Increases chance of decreasing materials needed',
			secondary: 'Faster crafting'
		},
		buildings: ['stonemason']
	},
	{
		name: 'Stone Smelter',
		plural: 'Stone Smelters',
		type: 'crafter',
		traits: {
			primary: 'Athletics',
			secondary: 'Dexterity'
		},
		effects: {
			primary: 'Increases number of furnaces used',
			secondary: 'Faster smelting'
		},
		buildings: ['stonesmeltery']
	},
	{
		name: 'Swineherd',
		plural: 'Swineherds',
		type: 'animals',
		traits: {
			primary: 'Strength',
			secondary: 'Athletics'
		},
		effects: {
			primary: 'More damage per attack',
			secondary: 'Faster pig growth'
		},
		buildings: ['swineherd']
	},
	{
		name: 'Teacher',
		plural: 'Teachers',
		type: 'other',
		traits: {
			primary: 'Knowledge',
			secondary: 'Mana'
		},
		effects: {
			primary: 'Pupil stats increase faster',
			secondary: 'Quicker switching between pupils'
		},
		buildings: ['school']
	},
	{
		name: 'Undertaker',
		plural: 'Undertakers',
		type: 'other',
		traits: {
			primary: 'Strength',
			secondary: 'Mana'
		},
		effects: {
			primary: 'Faster grave digging',
			secondary: 'Increases chance to revive dead citizens'
		},
		buildings: ['graveyard']
	},
	{
		name: 'Researcher',
		plural: 'Researchers',
		type: 'other',
		traits: {
			primary: 'Knowledge',
			secondary: 'Mana'
		},
		effects: {
			primary: 'Affects research time while offline',
			secondary: 'Affects max amount of research time they get'
		},
		buildings: ['university']
	}
];

export default jobs;
