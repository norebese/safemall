import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  no: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  token: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  user_email: {
    type: DataTypes.STRING(254),
    allowNull: false,
    unique: true
  },
  user_nickname: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  contents_id: {
    type: DataTypes.JSON,
    defaultValue: () => []
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true,
  tableName: 'users'
});

// 회원 검색(닉네임)
export async function getByNickName(user_nickname){
  try {
    const user = await User.findOne({ where: { user_nickname } });
    return user || null;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching user');
  }
}

// 이메일 중복성 체크
export async function getByEmail(user_email) {
  try {
    const user = await User.findOne({ where: { user_email } });
    return user || null;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching user by email');
  }
}

// 회원 추가
export async function addUser(user) {
  try {
    const newUser = await User.create(user);
    return newUser.user_nickname;
  } catch (error) {
    console.error(error);
    throw new Error('Error adding user');
  }
}

// 회원 수정
export async function editUser(user_nickname, updates) {
  try {
    const user = await getByNickName(user_nickname);
    if (user) {
      const updatedUser = await user.update(updates);
      return updatedUser.user_nickname;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error updating user');
  }
}

// 회원 삭제
export async function deleteUser(user_nickname) {
  try {
    const user = await getByNickName(user_nickname);
    if (user) {
      await user.destroy();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting user');
  }
}
