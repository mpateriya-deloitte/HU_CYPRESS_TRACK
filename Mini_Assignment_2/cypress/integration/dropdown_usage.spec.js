/// <reference types = "Cypress" />
describe("Handling Dropdowns without using hardcoded data",()=>{
    var langs;
    var skill;
    var country;
    before(()=>{
        cy.fixture('example').then((e)=>{
            langs = e.languages
            skill = e.skill
            country = e.country
        })
    })
    it("Visits the Demo Page and Validates the URL", ()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('equal', 'http://demo.automationtesting.in/Register.html')
    })
    
    it("Select Languages from Language Dropown", ()=>{
        cy.get('#msdd').click()
        cy.get('multi-select > div >ul >li > a').each(($el, index)=>{
            if(langs.includes($el.text())){
                cy.wrap($el).click()
            }
        })
    })

    it("Verify Selected Languages", ()=>{
        cy.get('#msdd > div').each(($el, index)=>{
            cy.wrap($el).then(e => expect(langs.includes(e.text())).to.be.true)
        })
    })

    it("Select Skill from Skills Dropdown", ()=>{
        cy.get('#Skills').select(skill,{force: true})
    })

    it("Verify Selected Skill", ()=>{
        cy.get('#Skills').should('have.value', skill)
    })

    it("Selects the Country from the Dropdown", ()=>{
        cy.get('.select2-selection, .select2-selection--single').type(country)
        cy.get('#select2-country-results > li').each(($el, index) => {
            if($el.text() == country){
                cy.wrap($el).click() 
            }
        })
    })

    it("Verify Selected Country", ()=>{
        cy.get('#select2-country-container').should('have.text', country)
    })
})