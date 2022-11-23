import Layout from '@/components/layout';

export default function IndexPage() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main className="font-fredoka text-black">
        <h1 className="">Let's set up some info!</h1>
        <h3 className="font-openSans">
          Thes are required for account creation.
        </h3>

        <form className="flex flex-col">
          <label htmlFor="shopName">Shop Name*</label>
          <input type="text" name="shopName" placeholder="Shop Name" />

          <label htmlFor="shopEmail">Shop Email*</label>
          <input
            type="text"
            name="shopEmail"
            placeholder="elon.musk@gmail.com"
          />

          <label htmlFor="shopContactNumber">Shop Contact Number*</label>
          <input
            type="text"
            name="shopContactNumber"
            placeholder="(+63) 916 906 9069"
          />

          <label htmlFor="shopAddress">Short Description</label>
          <textarea
            maxLength={150}
            name="shopAddress"
            className="text-stone-500"
          >
            Write your short description here...
          </textarea>

          <button className="bg-yellow-500 text-black">Submit</button>
        </form>
      </main>
    </Layout>
  );
}
