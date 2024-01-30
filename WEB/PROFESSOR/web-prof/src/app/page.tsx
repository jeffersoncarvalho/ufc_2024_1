import Link from "next/link"

export default function App() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Link href="/introduction/00_hello_world">Hello World, my first UI component!</Link> <br />
      <Link href="/introduction/01_functions">My Functions</Link> <br />
      <Link href="/introduction/02_internal_functions">My Internal Functions</Link> <br />
      <Link href="/introduction/03_internal_functions">My Internal Functions TS</Link> <br />
      <Link href="/introduction/04_props">My Props 01</Link> <br />
      <Link href="/introduction/05_props">My Props 02</Link> <br />
      <Link href="/introduction/06_multiple">Multiple Components</Link> <br />
      <Link href="/introduction/07_children">My Children</Link> <br />
      <Link href="/introduction/08_context">My Context</Link> <br />
      <Link href="/introduction/09_storage_save">Storage Save</Link> <br />
      <Link href="/introduction/10_storage_load">Storage Load</Link> <br />
      <Link href="/introduction/11_parent_child">Parent Child Communication</Link> <br />
      <Link href="/introduction/12_state">States</Link> <br />
      <Link href="/introduction/13_effect">Effect</Link> <br />
      <Link href="/introduction/14_ref">Ref</Link> <br />
      <Link href="/introduction/15_promises">Promise</Link> <br />
      <Link href="/introduction/16_fetch">Fetch</Link> <br />
      <Link href="/introduction/17_client_server_comm">Client Server Communication</Link> <br />
    </>
  )
}