Feature('homepage');

Scenario('test home page', async ({ I }) => {
  await I.amOnPage('/');
  await I.see('Test!');
});
