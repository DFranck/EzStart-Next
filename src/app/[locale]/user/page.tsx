import Section from "@/components/layout/section";
import { auth } from "@/lib/auth";
import UpdateUserForm from "@/providers/auth/update-user-form";

const UserPage = async () => {
  const session = await auth();
  if (!session?.user?.name) {
    console.log(session);
    return (
      <Section>
        <h2 className="text-2xl font-bold">Welcome!</h2>
        <p className="mb-5">What&#39;s your name?</p>
        <UpdateUserForm />
      </Section>
    );
  }

  return <Section>Hello{session.user.name}</Section>;
};

export default UserPage;
