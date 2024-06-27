describe('Basic Function Testing', () => {
    it('T1 - Login Success', async() => {
         //element
        const InputFieldUsername = await browser.$("#user-name")
        const InputFieldPassword = await browser.$("#password")
        const LoginButton = await browser.$('//input[@value="Login"]')
        const CartIcon = await browser.$("#shopping_cart_container")

        //Login
        await browser.url('https://www.saucedemo.com/')
        await InputFieldUsername.setValue("standard_user")
        await InputFieldPassword.setValue("secret_sauce")
        await LoginButton.click()

        //Assert Login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(CartIcon).toBeDisplayed()
        
        //Control
        await browser.pause(500)
    });

    it('T2 - Add to Cart', async() => {
        //element
        const AddtoCartButton = await browser.$("#add-to-cart-sauce-labs-backpack")
        const RemoveButton = await browser.$("#remove-sauce-labs-backpack")
        const CartIcon = await browser.$("#shopping_cart_container")
        const IteminCart = await browser.$('div[data-test="inventory-item"]')

        //Adding to Cart
        await AddtoCartButton.click()

        //Assert Add to Cart
        await expect(RemoveButton).toBeDisplayed()

        //Open Cart Page
        await CartIcon.click()
        
        //Assert
        await expect(RemoveButton).toBeDisplayed()
        await expect(IteminCart).toBeDisplayed()

        //Control
        await browser.pause(500)
    });
});