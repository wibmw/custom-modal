# Custom Modal

An Easy React Customizable Modal

[![NPM version][npm-image]][npm-url]

## 🚀 Getting Started

Using [`yarn`]():

```bash
yarn add @wibmw\custom-modal
```

## ✨ Usage

How to use `CustomModal` in your project:

```javascript
import CustomModal  from 'custom-modal';
 
export default () => {

  // Modal Open/Close toggle
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => setisOpen(!isOpen)

  return (
   <>
      {/** *********** Page ******************/}
      <main className='...'>
        <section className='...'>
            .....
        </section>
        {/** *********** Custom Modal ******************/}
        <CustomModal {...{ isOpen, toggle }} >
          <div>Successfully Registered !</div>
          <br />
          <div className='form-button' onClick={() => navigate('/next-page')}>
            Link to the next page
          </div>
        </CustomModal>
      </main>
    </>
  )
}
```

## 📌 Props

| Prop       | Type       | Default | Required |
| ---------- | ---------- | ------- | -------- |
| `isOpen`   | Boolean    | `false` | Yes      |
| `toggle`   | () => void |         | Yes      |
| `children` | ReactNode  |         | No       |

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)

[npm-url]: https://www.npmjs.com/package/@wibmw\custom-modal
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package
