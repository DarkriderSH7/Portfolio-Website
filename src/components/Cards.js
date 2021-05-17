import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Cardskills from './Cardskills';
function Cards() {
  return (
     
    <div className='cards'>
    
      <h1>Skills</h1>
      <div className='cards__containerskills'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
          <Cardskills
              src='https://www.assignmentexpert.com/blog/wp-content/uploads/2019/10/hardest-programming-language.png'
              text='Javascript'
              text2='CSS'
              text3='HTML'
              text4='Python'
              text5='C++'
              label='Languages'
           
              />
              
          <Cardskills
              src='https://image.shutterstock.com/image-vector/database-icon-260nw-556811731.jpg'
              text='MongoDB'
              text2='MySql'
              text3='PostGreSql'
              label='Databases'
              
              />
                <Cardskills
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyqIfz-x4VFPuPDbsLCvnRAcdTwrY6b_IYA&usqp=CAU'
              text='ReactJS'
              text2='Bootstrap4'
              text3='Material.css'
              label='Libraries'
              
              />
                 <Cardskills
              src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUPEBMVEhUQFRcVFRYYFxcYGBAWFRUYFhYWGBgYHSkiGxolGxgVITEiJikrLi4vFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICYtLS0tKy0tLS0tLy0tKy0tLS8tKzUtLSstKy0vLS0tLy0tLS0tKy0tLS0tLS0tLS0tLf/AABEIAKIBNgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUHBgj/xABIEAACAQIDAwkECAIIBAcAAAABAgADEQQSIQUxQQYHEyJRYXGBkTJCUqEUI2JygrGy0XPBFTM0Q5LCw/A1U6LhFiQlVHSz0v/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAzEQACAQIDBQYGAQUBAAAAAAAAAQIDEQQhMRJBUWHwBXGBobHhEyKRwdHxMhQzQlLCFf/aAAwDAQACEQMRAD8A8HERPrTyxERAEREAREQBERAEREAREQBESgHz0HeTwgFYm9wvI7aVUZkwla32gEv5OQZhbU2Ji8LriKFSkPiZTlueGcdW/deUVSDdk1fvX7J2XrY18SkSxBWIM3GA5J7QrjNSwtZlO4lcgPeC9rjwkSko6uxKTehp4my2nycxuGGavhqtNRvYrdB4ut1HmZrJKaaumRaxWIiSBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREnhqD1XWlTUu9RgqqN7MxsB6wCE3OE5I7SqjMmErEdpXJfwz2vOxcjeReG2bTFWpleva71W3IT7tO/sjhfeePAD1H9IUf+bT/xr+88qr2nnanG64v8deB1Rw+XzM+atp7GxWG/tFCrSG67IQpPYG9knwMwZ9QviKFQdGXpuH6uUlWDX4W4+E5LzlchEwynG4NbUr/W094okmwdPsX0I4XFtN2mHx6qS2JqzehSpQcVdO5zzC4d6rrSpqXeowVVG9mY2Ane+RXImhs9AxAq4gjr1SL5Sd607+yvfvPHgBz7mZ2etXGvWYX+jUiV7nqHID/h6Qec7DtbHLh6T1m1yjQfEToo8zaYdoVpymqMeV+be7u5FqMYxi6kv0jOlupTVgVYBgwsQRcEHeCDvE5gm2KyioyswqYg3d9RlCXsAeGnEbhYCbjCbVxWJq06NFmC0wMznewFru1+3W3iL9sxn2dOObatnn3L85Le1nZHPT7Upzstl3drJZvN5eWb3K9rs8rzl8hUwynG4NctK/1tIbqVzYOnYl9COFxbTdzcC+guSdwGpPcBPp0NQxdF1BFSlVD0232YG6sNfPWcT5vNjh9qJRqdb6K1R2+01ElVP+PKfKdmExMvhyVTWP1t+dxtUhFtOGj+h7/kByCpYRFxGJQVMSwDWOq4e/uqN2ftbyGm/wB7NTyoYjBYlgSCMPWII0IIptqDPnbKvYPlMcNg5Y3aqTlbPhf7qxepVVC0UvP2Pp4zlnOTyBp9G+NwSZGS7VqSjquvvOg91hvIGhF+O/mpSwLKLZdbgeyeBuNxvPptdQL63HrpGIw8sBKM4Sve+62lub4+BMJqummrWsfKkEzacptnjDYzEYdRpTqsEA4KTmQD8JUTrXIHkBTwqLicUgqYhgGCtYrh+IAG4v2tw3DtPfWxUKUFN79FxyMIU3J2RyjAcl8fXGalhazKdzZCoPeC9gfKW9pcn8Zhhmr4erTUb2KHIPFxdR6z6Pq7RoqSGcAjeOyW8NtXD1j0aVEckHq31I46HfOH/wBCr/L4eXj6l1Ck3sqavwuvQ+YonV+cjkDTFN8dgkyFAWrUVHVZRvdB7pG8qNCLka+1yiejQrxrR2o/oynBwdmIiJsVEREAREQBERAEREAREQBERAERNjsHYWIx1UUMOuZt7E6JTX4nbgPUngDIlJRV28gk3oa6Unadjc02DpqDinqV34gE00HgF63q3kJsMVzX7KcWWk9I/EtWoSPKoWHynC+0qCds/p7p+RusPM4PPe8zOzlq41qzC/0akSvc9Q5Af8PSesxuWfN5XwCmvSbpqA9prWeiO11GhX7Q8wBM7mTxqpjKtE6GtRuveabXt42Zj+Ey9erGphpSg75fvyuVhFxqJM9zzr/8Pb+JT/VObrySrvRomnQqmtWD1LE0hTNJctmTrZs3XW4PadNJ0fnX/wCHt/Fp/qnj8NyiwlOlTdXfpaGBejTp9GbJiKnt1M9+J3WG4G5ubSOz51Y4ZfD/ANnx/wBcr23X1vu85rRg6j2uC9WeabY1fC1qHT0jSNR0ZL5esA633E2IuLg6i4n0BjcKlam9GoMyVVZGHarCxHoZxLFbQw1SngKVJnz4fIpTLZUZ6maq2b3szZLAbgGvvAHcatRUUuxsqgkk7gALkzDtaUpbDlr83LRq296qz11L4SMVtJcvTwOOcz1X6Pj8RhHPWZGW/wAT0aliB4gsfwz3nLKlUrNRw1MG1VmJNjYEWAJ7gCT5ThabXqJivptE5H6Zqy34FmLZSOIIJBHYTO/8kuVNDaNIVKRC1FA6WkT1qR/mp4NuPcbgVxalSqqva/Hvtb6FNhVqTpXt+L389DVpydZsSEKfUYcDJfdVNr69pLkk9wt2TA2VhMa4eiENPpW+uqsDcD4dd+p3DffgJtuczaFbD7PqVaDmm+amoZd4DVFBseGnGc62DzqY2iQmICYldBf2KnqosfNfOKMq9WltRSeiz5Z34O7d3fK5z1MLSjPWS1va2/K3JJLZVs7NpWu2dmw1GnhqQQdVKSkknsGrMfmTOL83W1V/pYVW6oxZrDX3TUJqKD5qB4mbnlhy9GLwvQYVWpmtpWzlQQnFE1s2bceNri2unORnpsGF0dCGU7irA3Ui/EGxk4fCzjGfxVZy4+v1OmVWDcVDRdabsj6L5Ssy4PEspKsuHrFSNCpFNiCCON54zb6OMPWrUwi42pRw6Y2x1o03BzMABoSAubXRVvwBO+5Fcr6W0KYRiq4hF+sp7s1t7oDvU/K9jwJ3a7Jw4Z6gpU89QFXbKM1RTvDnew0Gh7Jx0a39O9mcc077s81k+Ky552eiZ0SjtrJ9fk5rtvZlLCYLaeGpJVXovoatVdriuS6tmUZQFtmIsCeG6dYp7h4CYtbAUXXo3pqyWUZWAK2Q3XqnTQgEdlp4nnJ5bphab4PDuGxDjKxU/wBnUjUkj+8I3Dhe54AzOrPFbMEne922+MYR/wCb+NkRGKp3e73b+55XYFNMft96ujJTrVKo7GFHqU2H4gjTtk4BzUYxaO0qQbQVUekO4kZl9SgHmJ3+T2gmqijuUUkMO8m+ZzDau1cMld8OKmd8xTqgkZjplzWtvNjroZkcntjv9KXOyr0ZDaNfMRrZbaf9r755PG8ncmMy0qiPTFUHMcwIGe5XdqRuuNDvnUcHsApUDlwVT/q8ez1npYipClTSUv5R3rP27uep85DBKNZPDw2ltfN8ytHPw5556WtmehM+ZuU+zxhsXiMOui0qrBR2ITmQeSlRPpqfNPK7FjE4/E1KfWFSuypbXPlIprYDffKLeM4+y77cuFvv+z6DE6I1EpOncmOahqiirj3anfUUadsw++5BAPcB5z1w5s9k2t0DE9vTVr/J7fKdc+0KEHa7fcvdGUaE2rnBInV+UfNKuU1MBUbMNeiqkEN3K4FwfvX8ROV4nDvSdqdRSjoSrKwsVI4EToo16dZfIykoSjqQiImxQREQBERAEREAREQCjG2vZPonkLyeXAYRKdvragD1jxLkezfsX2R4X3kzgGy8vTUs3s9LTzeGcX+U+ltr0KtShUp0HFOq6MEci4RiNDaeV2nN/LC+T168Tpwy1ZosfyxppVejSpmsabZGObKucAFlBsb2vY94I4SFfli1O2egCDxWpuPZYrORbN2xicC9XCVaNNatJznDBidw3G+oOhB4ggzNr8sa2U5qdEi2vVf/APc6YdnUWk4q643efPU8jEYjtFVX8PKO5fL90dv2Xj6WLorWpnMlQbjw4MjDtBuCJwrldgH2RtLNhjlCla9DiArEg0z9kEOlvht2z3PM1hMYKNTE1vq6OIIalTsbuRvranRSLAfEADuAvp+fYDpsL29HVv4Zkt/mnDh9mniXTg7xd/S+fdpzPZneVNSeTPd7D21gts4axVX9npaD2LUmGouOIuNGG/1AyP8AwZs3/wBrT+f7z5uw2KqUXFWi7U3Xc6MVYeY4d3GeuwPOjtVBlapTq2DavSF9FJHsZeyWnhKsP7U2lwu17egVWNryR2WjyQ2ejBlw1MFSCDYmxBuDqZ4jnU5b08jbOwrh2fq4h1Nwi+9SB4sdzdguN508Btnl5tPFgpUxBROKUgKYPcSvWI7ibTQUhNKOEk5KdWV7aK7fqROorWii4Jcw1epScVKTtTddzKxVh4EayKiSyzvksjnTN/juWGPxWHqYbE1RVTKrXKKGutWnbrKBffxnnAZk016tT7n+pTmNIpQUVZKxF2279ZI2JuNCCNx100IuPkQfOQWuwfLe6keydV8gdAdN8nWxlSrlNRi5VFQE7wqiyi/dMeqRmU987W24pvl1uMrLQvDEKr3GZGU3VkJsp4EXNwe8NPUbN5f7UpgKtdcQBbeiuwHHgrnxN/GeNxI1v3S1OKtQhNtNGkZSS+V/f38z1W1OXm08QCjYg01OhFICn/1DrfOeZCyQxTe9Z/v6n/EOt5XtLy1KZ4lPvdYeqi/yPjKxpKH8VkWdRv8Akvv7+RapuyMroSrIQysN6spupHeCAZ3zkPywo7RpBSQmIQfWU917b3QcUPyvY8CeE1KBtmGo7QQQPEjd4GYodkYOjMjKbqykqyntDDUHvEyxOHjWjZ67maUqmy7o78nI5RXFXpfqw2YU8uuhuBmvu77bvWeunz5s3nK2rSyoay1RcD6ympIF7e0tifE3mLtXnF2riFyGv0Skaiiopk/j1ceTCcVTDYiq1tyTt1wuWoqjRuqatfPf14LI6bzlcuKeEpthcO4bE1BlOU3+jKRqzEbntuHC9zpa/nOZbk8tR3x9QXFE9FRB3B8oLv4hSoH3m7BOWr29up7yd5nf+Z+39GU7b+kq5vHpD/K0vWp/0+GcY72k313ebLRe3Uu9xuOUG1a2FAqLSFRNxbMQUPeLHQ9vl2XxeTPK2li6j4dgKdVNQt7h1sDdTxIvqPOekqIGBVgCCLEHUEHeCJwblfS+i7RqrQLJ0ToyEHVCaaEWPcTKYKhSxMZU2rSSupeK1Xj+rFKrq0qm3tXi/wDHLJ8t/wBfPd3dqyhghYBmBIW4uwFrkDiBces5rzy8nlaku0EFnpladX7aMcqMe8MQPB+4TI5AYs7QqvXxKl6lDLlexARtbZCNFOW9x3ntnpecPL/RuKzf8o28bjL87TJU3hcTGN88r+O76GsZ/FpttW1t4bz51iInvnGIiIAiIgCIiAIiIBBxfSfR3IflAuPwlOtcdIoCVl4rUUam3Y3tDuYT5yM2HJ3lFiNn1unw7WJ0dDqlVexh3cCNRc9pB48Zh/jQstVp+OuBrRnsM7Tzh8jBj0GIoADFUB1Du6dN5pMfM5SdxPYTPC8h+RLY6r0mJRlw1BuurAqa9RT/AFVjqFU+139X4ret2Nzt7PqqPpAqYV+IKtUS/wBlqYJt4qs2OM5zNk0h/aC5tcKlOoSb678th5kTz6dXFUqcqKi8/LjbvOiUacpKd9D14AUWFgAPAAD+U+ducTb64/GvVpm9KkBSpHgyqSS48WLEHsyzY8tecqtjlOHw6mhQbR7kdJWHwtbRV7VBN+2xIniFnTgcI6fzz13Lh15ZmdarfJEWWVpLv+636DJ2kqS/pb9JnoOJzSeT7n6FkLLiCAJJRCRa5cUSYEgJcWSVLlurU+5/qU5hTO92p9z/AFKcwZCIWr7/ALIvUzp/vsm32wgGDwbAAFvpFzbVrVABc8bTSI38vym92gM+AwzrqKFStSqfYaoy1ad+5lzWPajDhJk/4rn/AMy/XiSt/W9GFicEPo6YnNbPWqUbW0UJTpPmuNf7w8OExdo4N8PVehVAz0mKm248QynipBBB4gibPEH/ANNo/wDy6/8A9GHm0wqUqmGp7Trrn+hf+XZCDlxVRcpwoYgWyhWs9zcikg9+UnNp3fFrx3elvE02Fp3e55DThL2JwlSlkNRSvSoKibuujEgMLd4PpIYis1R2qOczVGLMdBmZjcmw0GpMgx3dw07tSf5mXzMy7g2IqJb4wPEEgEHuI4SVVJDDe2n8RP1iZVUayrRCfzeC+5h0k66/eH5yyEmZTXrL94fnLGWQolr59cy2BOpcyu31Rqmz6ht0rdLRvxYKBUTxyqrAdzTmJEgHZSGUlWUhlYEgqQbggjUEHW8pXpKpBxZeEtmVz6xnItr8ma20Nr4hVulNGp9JUtog6Gn1V7XPZw3nvjyX53gqiltFGJGnT0wDm76lPSx71ve/sievpc42x8pqDEgAm7fVVQxJHFclybD5TyqPx8LKTjG7atdZrVO/lp9TpmoVUrvfc9FsrZlHC0loUVCIm4cSeLE8SeJnP+efb6pRXAIQXrFXqD4KaHMoPYWcAjuQ90sco+d+iFKbPRqjn+8qAqi94T2mPcco8d05PicVUrO1aq5qVKhzOzb2P+9LDQAADSaYTCTdT4lTvz1b4sirUSjsxIiSkRJT2DjEREkCIiAIiIAiIgETIMJckSJDRKLBWVqru+6v6BJlZOqv6V/QJnsi+fXIsqJdUQBJCWSsLlZOl/lb9JkZKgN/g36DLFZaPuZCSEkKL/C3oY6Fvhb0MDaXECTUyNKmWNlF7angAO0k6AeMvrlXd127SOp5Kd/ifTjJSbDlbLeSCHK17DOgC3Ns1nQ6d1gdd0wXpkbxa/z8Dxmw+ju3WbUnfc6nzkmRR2pft1B/kZOwZqdjExmOqVmDVSGKotMGwXqoMq3ygXNgBc66S/s7aVXDktSYDOMroyq6VV35XRgVYeI04WkKmG7vNP2/a0sGieBv3bj6H+V5TZSWzbIupp5pmVtHadTEBVcIiU75Ep01RKeYgsVVbXJIFyTc2Guk2+F21SqVhhjdME9M4YK1r01dgwxD26vS9MEqse4qNAJ5nUG27u/7ReUdOLVuHV+/maKTTuXMVh3pO9KoLPSZkcdjISrD1Blvs/3xMBeyXK9B0y51Zc6h1zAjMrE2YX3qbHXul+8qMN7afxE/WJlVN8xcN7afxE/WJk1DrIepX/J9y+5Gn7S+I/OWZep+0v3h+csyUTv65lsyDCXTIkQyTHZYy9X8S/lUlwrJZer+JfyeUcSW/t6osKsuqICyQEskGyokoiXIEREAREQBERAEREAREQCNpcqjd91f0iRkqv8AlX9IkEb+uRbkoiSSIiIAmSuHC61NPsD2/M+7+fdxl6mmVQ1McAS41KkjUXHsam3ae2xlqXjC+ZntuWnX49e4kz3suiqOA3Dv7z3nWZeGRPdNz8/SYBl2jQZt27tlmsikoq2tjYESJEoKLAaNfx1H7iDUI9pSO8aj95QwtwIGiOHV8P23S3UQ+8A3yMvqwOoN4IgttPeYRQHQH8Lj8r7vKWKlC28Fe8aj9x85sXUHeLy10VvZJHdvEhovGZrTSPDreGvy3j0lalZmyhmZgi5VuSci3JyrfctyTYaamZjp8S+aSzVtvuG8fa9Rr6yljZTuWsL/AFifxE/UJlNUI7PQH8xLeEpBnUi4ysCb7lAO8sN3mJRjICs5PuX3K9LbUAafZX9pZMqTKGWL2SKShlZSARtJ26v4l/J5ST938S/k8EP8eqLVpKIkkiIiAIiIAiIgCIiAIiIAiIgCXKlNiFIBPVXgfgEtykENE+hf4W9DHQv8LehkIkDPr9k+hf4W9DK9C/wt6GW5SBn1+y4qVFNwHBHEAgjzEvCvU9+mT35Cr+oFj4kGYhltxIu1oHDa168U0zYpWp316h7Koy38G3eZtNiuJUWzDLfdxQ+BGhE8uwlKVd09hit944N4jcfOR8V7yksPtb+vTyvzZ68EHUawRPN0NqEe0tu+mcp8Sp0PgMs2eG2kG0DBu49Sp6HQnuUmWU4vrpHPKjKOvXjp9bGW9FTrbXtGh9RMWtXyG183dxHmJDFYpictivaDv8+yYkvY0hTdrvrrkbBMUp7vH95cJFr8JqpUDTMxyrfefePcN7Hw87SGWdJcTIrYrgvr+0tinY/WXLfAPb/H8Phqe4b5iti7aUwV+0f6z5eyO4eZMghme1fQvGm7cPX29e4z3zkWykAblANh3957zcyHRP8AC3oZjrJyUWs1p15lw0n+FvQyPQv8LehkZGSM+v2XOhf4W9DKdC/wt6GQiBn1+yfQv8LehkmQhTcEdZd4tweWpWA0317iIiSSIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCUlYgETIES5KWlWgWGWW2SZZEgVlXEttGKUlsrM0pLRSUcSykUo4qogsDdR7rdYDwB9nytMmnjaZ9pSp7V6y+hNwPMzEKSOSE2tCrhF+3VvFpmbUxaL7PXPaQQnpvb5DxmHUdnOZiSd3gOAA4DuGkBJNUh3k8yYxUSirL6CUVZcAl0iGyolYiXKkpGViAIiJIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAKSklEgELShWTlIBbKxkl20WkWJuWgsqFly0WiwuUAiVlZJBSViJIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREApKxEgCUlYgCIiSBERAEREAREQBERAEREAREQBERAEREA//Z'
              text='Canva'
              text2='AdobeXD'
              text3='Figma'
              label='Tools'
              
              />

          </div>
     </div>
     </div>
      <h1>Work Experience</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           
            <CardItem
              src='images/WAF.jpeg'
              text='Womens Association Forum,Chicago'
              text2='Designed the UI for the website and developed the website along with my team and added the paypal payment api along with the gallery page and an admin page.'
              label='Front-End Developer/UI Designer'
              redirect="https://wafchicago.org/"
              />
              
            <CardItem
              src='images/GPIS.jpeg'
              text='Global Pride International School,Hyderabad'
              text2='Designed and developed the Front-End the website from scratch along with my team.'
              label='Front-End Developer/UI Designer'
              redirect="https://gpis.in/"
            />
          </ul>
          <h1>My Projects</h1>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='More to be added here  '
              label='Full Stack'
            />
            <CardItem
              src='images/calculator.jpg'
              text='Calculator'
              redirect='https://darkridersh7.github.io/Calculator/'  
               
            />
            <CardItem
              src='images/img-8.jpg'
              text='More to be added here  '
              label='Full Stack'
               
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
