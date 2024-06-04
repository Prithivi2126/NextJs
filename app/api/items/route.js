export async function GET(req){
  const type=  req.nextUrl.searchParams.get('type')
  console.log('Type: ',type)
    return Response.json([
        {name:"dfgh"},
        {password:"dfghj"}
    ])
}

export async function POST(){
    return Response.json(     
    {
        message :'post success'
    })
}