export const title = 'Awesome page'
export const description = 'My description'

export const Page = () => {
  return (
    <div>
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <p class="text-center">
        <a class="text-blue-700 hover:underline" href="/about">
          About us
        </a>
      </p>
    </div>
  )
}
