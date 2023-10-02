import { Loader2 } from "lucide-react";
import { useState } from "react";
import SuccessNotification from "@/components/notifications/Success";
const { createClient } = require("contentful-management");

const client = createClient({
  accessToken: "CFPAT-HFbSxUqB9ilfMa10px3wPyTlkZRtf6msD_XvMljqlz4",
});

const spaceId = "zy6rsxnydh8b";
const environmentId = "master"; // Usually 'master', but could be different

export default function Example() {
  const [loading, setLoading] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      setLoading(true);
      const space = await client.getSpace(spaceId);
      const environment = await space.getEnvironment(environmentId);

      await environment.createEntry("contact", {
        fields: {
          // Define your entry fields here
          firstName: {
            "en-US": data["first-name"],
          },
          lastName: {
            "en-US": data["last-name"],
          },
          email: {
            "en-US": data["email"],
          },
          message: {
            "en-US": data["message"],
          },
        },
      });

      setSuccessMessageVisible(true);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-12 pt-12 sm:pt-8 lg:static lg:px-8 lg:py-12">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <SuccessNotification
              show={successMessageVisible}
              setShow={setSuccessMessageVisible}
            />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Bizimle iletişime geçin
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ekibimize katılmak, soru sormak veya sadece merhaba demek için
              bizimle iletişime geçin.
            </p>
            <dl className="mt-4 space-y-4 text-base leading-7 text-gray-600">
              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <Building2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Ottawa, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div> */}
              <div className="flex gap-x-4">
                {/* <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <MailIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt> */}
                {/* <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:hello@example.com"
                  >
                    merhaba@falan.com
                  </a>
                </dd> */}
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="px-6 pb-24 pt-0 sm:pb-32 lg:px-8 lg:py-12"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Ad
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Soyad
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  E-posta
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Mesaj
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="flex rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Mesaj Gönder{" "}
                {loading && <Loader2 className="animate-spin ml-2" size={20} />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
