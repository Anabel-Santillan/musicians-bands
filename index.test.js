const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a band', async () => {
		const testBand = await Band.create({name : 'TLC'})
		expect(testBand.name).toBe('TLC')
	})

    test('can create a Musician', () => {
        async() =>{
            const testMusician = await Musician.create({name: 'Prince'})
            expect(testMusician.name).toBe('Prince');
        }
    })
    test('can create a band',()=>{
        async() => {
            const testBand = await Band.create({name: "TLC"})
            expect(testBand.name).toBe('TLC')
        }
    })
    test('can add multiple musicians to a band',()=>{
        async() => {
            const nirvanna = await Band.create({name: 'Nirvanna', genre: 'grunge'});
            const kurtC = await Musician.create({name: 'Kurt Cobain', instrument: 'guitar'});
            const daveG = await Musician.create({name: "Dave Grohl", instrument: 'drums'});

            await nirvanna.addMusician('Kurt Cobain');
            await nirvanna.addMusician('Dave Grohl');

            const musicians = await nirvanna.getMusicians();
            
            expect(musicians.length).toBe(2);
            expect(musicians[0] instanceof Musician).toBeTruthy
        }
    })
    // test('Can add multiple musicians to a band',()=>{

    // })
    
})