import supabase from "./supabase"


async function getUser(id)
{
   let {data} = await supabase.from("User Details").select('*').eq("user_id",id);
   console.log(data)
   return data;
}


export default getUser;