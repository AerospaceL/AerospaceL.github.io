import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://afvzktdhobdliswojzve.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdnprdGRob2JkbGlzd29qenZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MjkzNjMsImV4cCI6MjA2NDAwNTM2M30.XFgLNyA5kSIWdE2aogBMiKWaMMwDMEwQDstxUmegM-E"
const supabase = createClient(supabaseUrl, supabaseKey)

const categoryTech = 1
const categoryPhoto = 2
const categoryTalk = 3

const fetchPostListFromDB = async () => {
  const { data, error } = await supabase.from("posts").select()
  if (error) throw new Error(error.message)
  return data
}

const fetchTechPostListFromDB = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("category", categoryTech)
  if (error) throw new Error(error.message)
  console.log(data)
  return data
}

const fetchPostListByCategoryFromDB = async (category) => {
  let postListCategory = 0
  if (category === "tech") postListCategory = categoryTech
  else if (category == "photo") postListCategory = categoryPhoto
  else if (category == "talk") postListCategory = categoryTalk

  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("category", postListCategory)
  if (error) throw new Error(error.message)
  console.log(data)
  return data
}

export {
  fetchPostListFromDB,
  fetchTechPostListFromDB,
  fetchPostListByCategoryFromDB,
}
