import { Selector } from 'testcafe';

fixture`Form Automation with basic`
    .page`http://localhost:3000/`;

test('Fill User Form and Submit Form', async t => {
    await t
        .typeText('#firstName', 'Bruce')
        .typeText('#lastName', 'Banner', { replace: true })
        .typeText('#age', '27')
        .typeText('#dob', '2024-05-20')
        .click(Selector('#country'))
        .click(Selector('#country option').withText('India'))

    await t.click(Selector('#btnSaveUser'))
        .expect(Selector('#firstName').withText('')).ok()
});

test('test if form data is populated in grid', async t => {
    await t
        .typeText('#firstName', 'Bruce')
        .typeText('#lastName', 'Banner', { replace: true })
        .typeText('#age', '27')
        .typeText('#dob', '2024-05-20')
        .click(Selector('#country'))
        .click(Selector('#country option').withText('India'))

    await t.click(Selector('#btnSaveUser'))

    await t.expect(Selector('[data-testid="registered-user-list"]').withText('Bruce')).ok();
})
