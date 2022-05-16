const {sequelize} = require('./db');
const {Band, Musician} = require('./index');
const { Song } = require('./Song');

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
    test('Song creation test',()=>{
        async() => {
            const testSong = await Song.create({title: "Smells like Teen Spirit", year: 1991});
            expect(testSong.title).toBe("Smells like Teen Spirit");
            expect(testSong.year).toBe(1991)
    }})

     test('can add songs to bands',()=>{
         async() => {
            const testSong = await Song.create({title: "Smells like Teen Spirit", year: 1991});  
            const testSong2 = await Song.create({title: "Heart-Shaped Box", year: 1993})   
            const nirvanna = await Band.create({name: 'Nirvanna', genre: 'grunge'});
            
            await nirvanna.addSong('Smells like Teen Spirit');
            await nirvanna.addSong('Heart-Shaped Box');

            const nirvannaSongs = await nirvanna.getSongs();
            expect(nirvannaSongs.length).toBe(2);
            expect(nirvannaSongs[0]).toBeInstanceOf(Song);
         }

    })

    test('bands can have many musicians', async() => {
		const beatles = await Band.create({name : 'The Beatles'});

		const ringo = await Musician.create({name: 'Ringo Starr', age : 66});
		const paul = await Musician.create({name: 'Paul McCartney', age : 68});
		const john = await Musician.create({name: 'John Lennon', age : 40});
		const george = await Musician.create({name: 'George Harrison', age : 50});

		await beatles.addMusician(ringo)
		await beatles.addMusician(paul)
		await beatles.addMusician(john)
		await beatles.addMusician(george)

		const musicians = await beatles.getMusicians()	
		console.log("MEET THE BEATLES ", musicians)
		expect(musicians.length).toBe(4)
		expect(musicians[0] instanceof Musician).toBe(true)

	})
})