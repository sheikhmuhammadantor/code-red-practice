import Link from 'next/link';
import { Button } from '../cn/ui/button'

function Register() {
  return (
    <div>
        <Link href="/register">
        <Button variant="gradient" size="sm">Sign Up</Button>
        </Link>
    </div>
  )
}

export default Register;