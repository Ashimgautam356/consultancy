
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  passwordHash: 'passwordHash',
  phone: 'phone',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  address: 'address'
};

exports.Prisma.BlogScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  authorId: 'authorId',
  tags: 'tags',
  publishedAt: 'publishedAt',
  views: 'views',
  likes: 'likes'
};

exports.Prisma.ChatScalarFieldEnum = {
  id: 'id',
  chatType: 'chatType',
  createdAt: 'createdAt',
  adminId: 'adminId',
  roomLink: 'roomLink',
  chatName: 'chatName',
  image: 'image'
};

exports.Prisma.ChatParticipantScalarFieldEnum = {
  chatId: 'chatId',
  userId: 'userId'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  blogId: 'blogId',
  userId: 'userId',
  text: 'text',
  createdAt: 'createdAt'
};

exports.Prisma.CountriesScalarFieldEnum = {
  id: 'id',
  country: 'country'
};

exports.Prisma.DocumentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  documentType: 'documentType',
  status: 'status',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  passwordHash: 'passwordHash',
  phone: 'phone',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  address: 'address'
};

exports.Prisma.LiveSessionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  hostId: 'hostId',
  sessionDate: 'sessionDate',
  duration: 'duration',
  status: 'status',
  recordingUrl: 'recordingUrl',
  createdAt: 'createdAt'
};

exports.Prisma.LiveSessionParticipantScalarFieldEnum = {
  sessionId: 'sessionId',
  userId: 'userId'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  chatId: 'chatId',
  senderId: 'senderId',
  message: 'message',
  isRead: 'isRead',
  createdAt: 'createdAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  amount: 'amount',
  currency: 'currency',
  paymentMethod: 'paymentMethod',
  transactionId: 'transactionId',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  passwordHash: 'passwordHash',
  phone: 'phone',
  countryOfInterest: 'countryOfInterest',
  subscriptionExpiry: 'subscriptionExpiry',
  role: 'role',
  paymentStatus: 'paymentStatus',
  profileCompleted: 'profileCompleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  address: 'address'
};

exports.Prisma.TestimonialScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  country: 'country',
  university: 'university',
  text: 'text',
  photoUrl: 'photoUrl',
  approved: 'approved',
  createdAt: 'createdAt'
};

exports.Prisma.UniversitiesScalarFieldEnum = {
  id: 'id',
  countryId: 'countryId',
  name: 'name'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  role: 'role',
  imgPublicId: 'imgPublicId',
  imgUrl: 'imgUrl',
  token: 'token'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  STUDENT: 'STUDENT',
  ADMIN: 'ADMIN',
  DOC_MANAGER: 'DOC_MANAGER',
  INSTRUCTOR: 'INSTRUCTOR',
  RECEPTIONIST: 'RECEPTIONIST'
};

exports.ChatType = exports.$Enums.ChatType = {
  PRIVATE: 'PRIVATE',
  GROUP: 'GROUP'
};

exports.DocumentStatus = exports.$Enums.DocumentStatus = {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  VERIFIED: 'VERIFIED'
};

exports.SessionStatus = exports.$Enums.SessionStatus = {
  UPCOMING: 'UPCOMING',
  COMPLETED: 'COMPLETED'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID'
};

exports.Prisma.ModelName = {
  Admin: 'Admin',
  Blog: 'Blog',
  Chat: 'Chat',
  ChatParticipant: 'ChatParticipant',
  Comment: 'Comment',
  Countries: 'Countries',
  Document: 'Document',
  Employee: 'Employee',
  LiveSession: 'LiveSession',
  LiveSessionParticipant: 'LiveSessionParticipant',
  Message: 'Message',
  Payment: 'Payment',
  Student: 'Student',
  Testimonial: 'Testimonial',
  Universities: 'Universities',
  User: 'User'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
