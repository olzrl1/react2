import { type TDeviceType } from '.';

export class App {
    static readonly TIME_OFFSET = '+09:00';
    static readonly TIMEZONE = 'Asia/Seoul';
    static readonly DEFAULT_LOCALE = 'en.UTF-8';
    static readonly THEME_CACHED_KEY = 'application-theme';
}

export class Locales {
    static readonly KOREAN = 'ko';
    static readonly ENGLISH = 'en';
}
export class DeviceTypes {
    static readonly DESKTOP: TDeviceType = '000_DESKTOP';
    static readonly MOBILE: TDeviceType = '100_MOBILE';
    static readonly TABLET: TDeviceType = '200_TABLET';
}

export const USER_PREFIX = '/users';
export const AUTH_PREFIX = '/auth';
export const EXAM_PREFIX = '/exams';
export const EXAM_ACCESS_PREFIX = '/exam-access';
export const STATIC_ASSETS = '/static-assets';

export class Users {
    static readonly ABOUT_ME = `${USER_PREFIX}/about-me`;
    static readonly GET_LIST = `${USER_PREFIX}`;
    static readonly GET_DETAIL = `${USER_PREFIX}`;
    static readonly DOWNLOAD = `:fileUrl/download`;
    static readonly PROGRESS_RESULT = `${USER_PREFIX}/progress/result`;
}

export class Auth {
    static readonly CHANGE_PASSWORD = `${AUTH_PREFIX}/change-password`;
    static readonly RESET_PASSWORD = `${AUTH_PREFIX}/reset-password`;
    static readonly LOGIN = `${AUTH_PREFIX}/sign-in`;
    static readonly REGISTER = `${AUTH_PREFIX}/sign-up`;
    static readonly VERIFY_ACCOUNT = `${AUTH_PREFIX}/request-verify`;
    static readonly CONFIRM_ACCOUNT = `${AUTH_PREFIX}/confirm-verify`;
    static readonly FORGOT_PASSWORD = `${AUTH_PREFIX}/forgot`;
    static readonly OAUTH_LOGIN = `${AUTH_PREFIX}/sign-in/oauth/:provider`;
    static readonly OAUTH_REGISTER = `${AUTH_PREFIX}/sign-up/oauth/:provider`;
}

export class Exam {
    static readonly SURVEY = `${EXAM_PREFIX}/survey`;
    static readonly SURVEY_VARIANT = `${EXAM_PREFIX}/:variantId/variant`;
    static readonly SURVEY_BY_USERS = `${EXAM_PREFIX}/survey/:userId/users`;
    static readonly PRESCRIPTION_BY_USERS = `${EXAM_PREFIX}/prescription/:userId/users`;
    static readonly MOCK_TEST_BY_USERS = `${EXAM_PREFIX}/mock-test-prescription/:userId/users`;
    static readonly MOCK_TEST_BY_USER_AND_VARIANT = `${EXAM_PREFIX}/:variantId/variants/:userId/users`;
}

export class ExamAccess {}

export class StaticAssets {
    static readonly BUCKETS = `${STATIC_ASSETS}/buckets`;
    static readonly BUCKETS_NAME = `${STATIC_ASSETS}/buckets/:bucketName`;
    static readonly UPLOAD = `${STATIC_ASSETS}/buckets/:bucketName/upload`;
    static readonly DOWNLOAD = `${STATIC_ASSETS}/buckets/:bucketName/:objectName/download`;
    static readonly OBJECT_NAME = `${STATIC_ASSETS}/buckets/:bucketName/:objectName`;
    static readonly PROGRESS = `${EXAM_PREFIX}/progress`;
    static readonly SECTION = `${EXAM_PREFIX}/section/mock-test/users`;
}

export class RESOURCE {
    static readonly HOME = '/';
    static readonly AUTH = Auth;
    static readonly USER = Users;
    static readonly EXAM = Exam;
    static readonly EXAM_ACCESS = ExamAccess;
    static readonly STATIC_ASSETS = StaticAssets;
}

export class BindingKeys {
    static readonly DATA_PROVIDER = 'std_portfolio.provider';
}

export class Roles {
    static readonly SUPER_ADMIN = '999-super-admin';
    static readonly ADMIN = '998-admin';

    static readonly ADMIN_ROLES = new Set([Roles.SUPER_ADMIN, Roles.ADMIN]);

    static isAdminRole(roles: string[]): boolean {
        return (
            roles.some(role => {
                return Array.from(Roles.ADMIN_ROLES).includes(role);
            }) ?? false
        );
    }
}

export class SagaConst {
    static readonly STREAM: string = '/stream';
    static readonly CONNECT: string = 'connect';
    static readonly AUTHENTICATED: string = 'authenticated';
    static readonly MONITOR: string = 'monitor';
}

export const BASE_URL = 'http://127.0.0.1:4999/v1/api';

export enum SECTION {
    KOREAN = 'korean',
    ENGLISH = 'english',
    MATH = 'math',
}

export enum SECTION_EXAM {
    LISTENING = 'listening',
    READING = 'reading',
    WRITING = 'writing',
}

export enum RECOMMEND_TYPE {
    EXPLORATION_SERIES = 'explorationSeries',
    CAREER_FIELD = 'careerField',
}

export class AuthProviderNames {
    static readonly STD_PORTFOLIO = 'std_portfolio';
    static readonly NAVER = 'naver';
    static readonly KAKAO = 'kakao';
}
