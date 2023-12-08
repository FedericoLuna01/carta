import CategoryForm from "@/components/forms/category-form"
import prismadb from "@/lib/prismadb"

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId
    }
  })
  console.log(category)
  return (
    <CategoryForm
      initialData={category}
    />
  )
}

export default CategoryPage