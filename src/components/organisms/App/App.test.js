import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import App from "./index";
import Header from "./../../molecules/Header/Header";

// check Header and TallyTable components
// jest.mock('./../../molecules/Header/Header');

describe("A simple JEST rendering test", () => {

  test('Qantas app render successfully', () => {
    render(<App />);
    // screen.debug();
    expect(screen.getByRole('img', { name: /qantas/i })).toBeInTheDocument();
    
    // expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  // test.todo("test two");

  // test.todo("test three");

});


// https://testing-library.com/docs/react-testing-library/cheatsheet#async


/*
Example of grouping repeative test with beforeEach;
// =================================================

describe('my counter component render successfully', () => {

  beforeEach(async () => {
    user.type(screen.getByLabelText(/Incrementor/), '{selectall}5');
    user.click(screen.getByRole('button', {name: 'Add to counter'}));

    // await waitFor(() => screen.getByText('Current count: 15'));

  })

  it('renders "Current count: 15"',() => {
    expect(screen.getByText('Current count: 15')).toBeInTheDocument();
  })

});

*/




/*
Example of an Async test
// ========================

test("Perform async test", async () => {
  await expect(...).toBeInTheDocument();
})

*/





/*
Function example of cleaning-up component on Timeout in the component js
// =========================================================================

let id = NodeJS.Timeout;

if(count >= 15) {
  id = setTimeout(() => myCustomFunction(true), 300);
}

return function cleanup() {
  clearTimeout(id)
}

*/

/*
Function test example of cleaning-up component

test('renders too big, and will be disappear after 300ms', async () => {
  await waitForElementToBeRemoved(() => {screen.queryByText('I am too small')});
});

*/


/* Mocks */
/*

Replicate a simpler static version of any complex component, place them inside __mocks__ folder. Hence everytime the test runs, it will use the simple static version instead.

Never mock data via https//

*/




/*

Mocking HTTP calls using Axios and/or Fetch.
Possible errors when changing code from one to the other.

Potential solution would be using 'MSW' Mock Service Worker - https://mswjs.io/docs/getting-started/mocks.

SWR tutorial #7:
Video: https://www.youtube.com/watch?v=FggwAN76lM0
Github: https://github.com/bmvantunes/youtube-react-testing-video7-mock-swr-with-msw/blob/main/src/components/CarBrands.spec.tsx

This is something new to me and I am open to the team suggestion. I would love to learn about this when the opportunity allows.

*/



